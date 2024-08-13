import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
 


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={" قیمت لحظه ای تتر"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)", backgroundColor:"black",  }}>
       
       <br-x/><br-x/>
       
       
       <div style={{width:"99%", height:80, backgroundColor:"#87ceeb", borderRadius:5, 
              textAlign:"center", 
      }}>
        <br-x/>
        <br-x/>
        لحظه ای: {(props.p.price as number).toLocaleString("fa-IR")}





       </div>
      <br-x/><br-x/>
      
      
      <div style={{width:"98%", height:100, backgroundColor:"#87ceeb", borderRadius:5, 
              textAlign:"center", 
      }}>
        <br-x/>
        <br-x/>
        تغییرات 24 ساعته: % {(parseFloat(props.p.diff24d) as number).toLocaleString("fa-IR")} 





       </div>
        <br-x/><br-x/>
       <div style={{width:"98%", height:100, backgroundColor:"#87ceeb", borderRadius:5, 
              textAlign:"center", 
      }}>
        <br-x/>
        <br-x/>
       تغییرات هفتگی: % {(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR")} 





       </div>
        <br-x/><br-x/>
       <div style={{width:"98%", height:100, backgroundColor:"#87ceeb", borderRadius:5, 
              textAlign:"center", 
      }}>
        <br-x/>
        <br-x/>
       تغییرات  ماهانه : % {(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR")} 





       </div>






        <center style={{fontSize:13, color:"white",
        



        }}>

      الهه دهقان-تیم تورینگ-رادرفورد
        </center>


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("priceeeeeeeeeeeeeeeee:", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}