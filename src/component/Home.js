import React from 'react'
import axios from 'axios';
import LibCommon from '../libs/LibCommon';
import TopPostsRow from './Layouts/TopPostsRow';
//
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''}
  }  
  componentDidMount(){
    var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
    axios.get('/cms.json?' + dt).then(response => {
        var resData = response.data
        resData.items = LibCommon.get_reverse_items( resData.items )
//        this.setState({ data: response.data })
        this.setState({ data: resData })
        console.log( this.state.data.items )
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  tabRow(){
    if(this.state.data.items instanceof Array){
      return this.state.data.items.map(function(object, i){
        return <TopPostsRow obj={object} key={i} />
      })
    }
  }    
  render(){
    return(
        <div className="body_main_wrap">
            <div id="div_img_main2"  className="cover" valign="bottom">
                <div id="div_img_layer">
                    <h1>〇〇 Blog<br />
                    </h1>
                </div>
            </div> 
            <div className="container">
                <div className="row conte" id="id_row_service">
                    <div className="col-sm-12">
                        <h2 className="h4_td_title mt-2">トピック</h2>
                        <hr className="hr_ex1"/>
                    </div>
                </div>                
                <div className="row conte">
                    <div className="col-sm-4">
                        <img className="img_kao" src="/img/pc1.png" />
                    </div>
                    <div className="col-sm-8">
                        <h3>このサイトの紹介 1</h3>
                        <p> </p>
                    </div>
                </div>
                <div className="body_wrap">
                    <div id="post_items_box" className="row conte">
                        <div className="col-sm-12">
                            <div id="div_news">
                                <h2 className="h4_td_title mt-2" >新着の投稿</h2>
                            </div>  
                            {this.tabRow()}                      

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}


export default Home;

