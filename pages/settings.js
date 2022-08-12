import React, { useRef } from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/Script';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { get, set, faviconChange } from '../js/title';
const titleValue = useRef(null);
const headRef = useRef(null);
const linkValue = useRef(null);
export function favicon() {
  const link = headRef.current.getElementsByTagName('link')[0];
  if(link.rel == "icon") {
    link.parentNode.removeChild(link);
  }
}
export default function Settings() {

console.log(titleValue.current);
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  function docuTitle(v) {
    useEffect(() => {
        document.title = v || 'Anonymous'; 
        set('title', v)
      }, []);
   
}

  return (

    <>
      {/* <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} url="/js/particles.json" />
      <Script src="https://kit.fontawesome.com/be27c0ad9d.js" crossOrigin="anonymous"></Script>
        
      <Head ref={headRef}>
        <title>Anonymous</title>
        <meta name="description" content="Anonymize your online identity with Anonymous, the best school unblocker using an Ultraviolet Backend, for work, school, and home." />
        <meta name="theme-color" content="#6853f"></meta>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        
      </Head>
      
      <body>
        <nav className="navbar">
            <div className="nav-options">
                <a href="/" className="nav-option"><i className="home-icon fa fa-house-user fa-2xl fa-fw"></i>Home</a>
                <a href="/games" className="nav-option"><i className="games-icon fa fa-gamepad fa-2xl fa-fw"></i>Games</a>
                <a href="/settings" className="nav-option"><i className="settings-icon fa fa-gear fa-2xl fa-fw"></i>Settings</a>
                <a href="/chat" className="nav-option"><i className="chat-icon fa fa-message fa-2xl fa-fw"></i>Chat</a>
                <a href="/movies" className="nav-option"><i className="chat-icon fa-solid fa-clapperboard fa-2xl fa-fw"></i>Movies</a>
                <a href="/misc" className="nav-option"><i className="movies-icon fa-solid fa-cubes fa-2xl fa-fw"></i>Misc</a>
            </div>
        </nav>
        <div className="header-container">
            <h1>
                Anonymous Settings
            </h1>
        </div>
        <div className="title-container">
            <input className="title" id="title" ref={titleValue} placeholder="Title" onInput={docuTitle(titleValue.current)}></input>
            
        
        
            <input className="link" id="link" ref={linkValue} placeholder="Favicon" onInput={faviconChange(linkValue.current)}></input>

            <button onClick={goBlank} className="ab">About:Blank</button>
            <button onClick={console.log('not currently working, wip as (react-)tsparticles has a different syntax and loading methods than particles.js')} className="ab">Particles On/Off</button>

        
            <select className="select-browser" id="select-browser" onChange={browserChange}>
                <option value="google">Google</option>
                <option value="bing">Bing</option>
                <option value="duckduckgo">DuckDuckGo</option>
                <option value="yahoo">Yahoo</option>
                <option value="brave">Brave</option>
            </select>
        </div>
        
        <Script src="/js/title.js"></Script>
        <Script src="/js/browser.js"></Script>
        <Script src="/js/blank.js"></Script>
        <Script src="/js/particles.js"></Script>
         {/*<Script id="cid0020000319109200791" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 200px;height: 300px;">{"handle":"anonprox","arch":"js","styles":{"a":"CC0000","b":100,"c":"FFFFFF","d":"FFFFFF","k":"CC0000","l":"CC0000","m":"CC0000","n":"FFFFFF","p":"10","q":"CC0000","r":100,"pos":"br","cv":1,"cvbg":"CC0000","cvw":75,"cvh":30}}
        </Script>
    </body> */}

    </>
  )
}
