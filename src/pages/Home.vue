<script>
import home01 from '@/assets/home/images/antares/home_01.jpg'
import home02 from '@/assets/home/images/antares/home_02.jpg'
import home03 from '@/assets/home/images/antares/home_03.jpg'
import logce from '@/assets/home/images/antares/logce.png'

import AuthPanel from '@/components/AuthPanel'
import ContactForm from '@/components/ContactForm'
import Map from '@/components/map/Map'

const scripts = [
  // batch
  'jquery.min.js',
  // batch
  'revolutionslider/jquery.themepunch.revolution.min.js',
  'revolutionslider/jquery.themepunch.tools.min.js',
  'antares/plugins.js',
  'scripts6da2.js',
  // batch
]

export default {
  created() {
    this.loadScripts()
  },
  data() {
    return {
      home01,
      home02,
      home03,
      logce
    }
  },
  methods: {
    loadScripts() {
      scripts.forEach((key) => {
        const path = `./${key}`
        const scriptEl = document.createElement('script')
        scriptEl.src = `static/js/${path}`
        scriptEl.async = false
        document.head.appendChild(scriptEl)
      })
    }
  },
  components: {
    AuthPanel,
    ContactForm,
    Map
  }
}
</script>

<style lang="scss">
@import "@/style/home.scss";
</style>

<template>
  <div class="home-page">
    <div class="page-loader bg-dark">
      <div class="v-center t-center">
        <div class="spinner">
          <div class="spinner__item1 bg-colored"></div>
          <div class="spinner__item2 bg-colored"></div>
          <div class="spinner__item3 bg-colored"></div>
          <div class="spinner__item4 bg-colored"></div>
        </div>
      </div>
    </div>
    <nav id="navigation" class="shrink border hover dark-nav modern dotted" data-offset="55">
      <!-- Columns -->
      <div class="flex-row align-center space-between container-xl p25-side fit">
        <!-- Logo -->
        <div class="logo">
          <a href="#home">
            <img :src="logce" alt="TSM">
          </a>
        </div>
        <div class="hidden-sm">
          <AuthPanel dark/>
        </div>
        <!-- End Navigation Elements -->
        <!-- Navigation Menu -->
      </div>
    </nav>

    <section id="home" class="rev_slider_wrapper fullscreen-container" >
      <!-- Start Slider -->
      <div id="home_slider" class="rev_slider fullscreenbanner lightbox_gallery">
        <!-- Slider Container -->
        <ul>
          <!-- Slide -->
          <li data-masterspeed="1000" data-transition="fade" :data-thumb="home01" data-saveperformance="off"  data-title="Intro" data-description="Home Slider">
            <!-- Background Image -->
            <img :src="home01" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="9" class="rev-slidebg" data-no-retina>
            <!-- Layer -->
            <div class="tp-caption gray1 badscript nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2000"
              data-fontsize="['20','20','20','20']"
              data-transform_in="y:-50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-90','-70','-60','-60']">
              Cool Places. Good Deals. <span class="theme-primary-text"> Be V.I.P.</span>
            </div>
            <!-- Layer -->
            <div class="tp-caption gray1 nowrap uppercase rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="500"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-25','-15','-13','-17']">
              OUR POTENTIAL IS IN YOURS.
            </div>
            <!-- Layer 3 -->
            <div class="tp-caption gray1 nowrap uppercase rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="500"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['55','45','37','25']">
              WE GOD THIS.
            </div>
            <!-- Left Strip -->
            <div class="tp-caption text-strip rs-parallaxlevel-0"
              data-x="['left','left','left','left']"
              data-y="['middle','middle','middle','middle']"
              data-start="2700"
              data-width="1px"
              data-height="125px"
              data-transform_in="x:-50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['150','130','80','40']"
              data-voffset="['16','0','0','0']">
            </div>
            <!-- Right Strip -->
            <div class="tp-caption text-strip rs-parallaxlevel-0"
              data-x="['right','right','right','right']"
              data-y="['middle','middle','middle','middle']"
              data-start="2700"
              data-width="1px"
              data-height="125px"
              data-transform_in="x:50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['150','130','80','40']"
              data-voffset="['16','12','8','5']">
            </div>
            <!-- Layer -->
            <div class="tp-caption white--text nowrap uppercase rs-parallaxlevel-0 hidden-sm"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['120','103','86','74']">
              <a href="#map" class="slow no-lightbox quadra-btn theme-primary-text bg-colored1-hover border-colored2-hover white-hover">
                EXPLORE THE MAP
              </a>
            </div>
          </li>
          <!-- End Slides -->
        </ul>
        <!-- End Container -->
      </div>
      <!-- End Slider -->
      <!-- Home Page Note -->
      <div class="page-note fullwidth c-default clearfix">
        <!-- Left Note -->
        <div class="left-note primary-border uppercase white--text">
          <p>
            <i class="fas fa-globe"></i> Made for <span class="theme-primary-text"> travelers.</span><br> <i class="fas fa-gift"></i> Watch videos and earn rewards. <br><i class="fab fa-rebel"></i>  Be rebel, be smart.
          </p>
        </div>
        <!-- Socials -->
        <div class="home-socials slow white--text">
          <!-- Social -->
          <a href="https://twitter.com/delamrmach" target="_blank">
          <i class="fab fa-twitter"></i>
          </a>
          <!-- Social -->
          <a href="https://facebook.com/mrmachovskimartin" target="_blank">
          <i class="fab fa-facebook"></i>
          </a>
          <!-- Social -->
          <a href="https://instagram.com/thatsmontreal" target="_blank">
          <i class="fab fa-instagram"></i>
          </a>
        </div>
        <!-- End Socials -->
      </div>
      <!-- End Home Page Note -->
    </section>
    <!-- END HOME SECTION -->

    <!-- Dotted Navigation -->
    <section id="dotted-navigation" class="hide-on-home nav-menu">
      <ul id="side-dotted-navigation" class="font-12 bold nav uppercase spy">
        <li><a href="#home"><span>Home</span></a></li>
        <li class="hidden-sm"><a href="#map"><span>Map</span></a></li>
        <li><a href="#about"><span>About</span></a></li>
        <li><a href="#apps"><span>Our apps</span></a></li>
        <li><a href="#contact"><span>Contact</span></a></li>
      </ul>
    </section>
    <!-- End Dotted Navigation -->

    <!-- QUADRA FIXED MODAL -->
    <section id="quadra_fixed_modal" class="faq bg-white slow-qdr" data-showme="#video" data-hideme="#footer">
      <!-- Modal title and title -->
      <div class="quadra_fixed_modal_top slow-qdr no-border">
        <!-- Button, select your color and background color. you can use data-color="#" attribute. -->
        <div id="qfm_button" class="white--text bg-dark">
          <!-- Comp. Hide Modal -->
          <i class="fas fa-times hide_modal" style="position: absolute;right: 0;width:100px;"></i>
          Questions?
        </div>
        <!-- Title, select your color and background color. you can use data-color="#" attribute. -->
        <div data-bgcolor="#fafafa" id="qfm_title" class="dark">
          <i class="fas fa-times close_modal"></i>
          <span class="modal_title">We got answers.</span>
        </div>
      </div>
      <!-- Modal Body -->
      <div class="qfm-body faq container clearfix">
        <!-- Filters -->
        <!-- Faq -->
        <div id="js-grid-faq" class="cbp cbp-l-grid-faq">
          <!-- Item -->
          <div class="cbp-item buying">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="fas fa-trophy"></i>
                <!-- Title -->
                WHAT IS THAT'S MONTREAL AND HOW DOES IT WORK?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  We are the first Platform in the world based around the metro (metroactive platform or mediatouristic platform) located in montreal, made for travelers by local citizens and entreprenors.
                  thatsmontreal.com is user friendly. Once you arrived on the metro map, select 1 metro station. A video will appear. At the left of the screen, symbolic icons gives informations for international tourists. On the right, the professional video of the location.
                  Under each video, press "Get the free gift" button and receive ur free gift by email! It’s only 1 click for the gifts, comments and shares! You can choose between manny social medias, such as Facebook, Google, and Twitter, just to name a few.
                  That’s right! Under each normal video of youtube, you can comment with various social medias!
                  Select a clip from the selection of content with the dots under each videos. Now visit more talents from the same local area!
                  At the end of each video, a touristic map will give you the directions from the metro station to the location.
                  Download our modern Applications, available on apple Store and Google Play.
                  The Spot it billboard allows you to Rent and find appartements, join local parties, start a community, etc. (See Spot it Billboard section)
                  Our chatroom mix all social media profile(facebook, Google, Twitter)  into one box, and each profile can interacted between them in LIVE...
                </div>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                WHAT IS THE GOAL OF THAT'S MONTREAL TEAM?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  We put in light talents who stay in the shadow. We portrait the city threw our style. We beleive our philosophy of sharing positive aspects to the world, multiply our chances of success in our own market. That's montreal is a great mix of marketing, transport, tourism, media, innovation, local and international horizons threw collective intelligence. We also think the symbols,adress,distance from the metro, informations,the free gift and the video together represent the future in manny aspects of marketing and informations.
                </div>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                HOW CAN I EXPOSE MY BUSINESS OR TALENT ON THAT'S MONTREAL?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  Please write to info@thatsmontreal.com or call at 1-438-351-0112.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                ALL THE GIFTS ARE FREE?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  Yes. Once you have the gift, you have to follow each steps in the email and keep the promo code with the promotion.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                WHERE CAN I FIND MY PROMO GIFT?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  You'll find your free promo gift and code into your email. All the informations of the gift are in the jpeg image.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                WHY SYMBOLS AROUND EACH VIDEOS?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  If the tourist or person doesn't speak the english or french language, the symbols will indicate important informations in few seconds and help to understand and locate. We think the international language is threw symbole, visuals, sound and emotions.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                ABOUT THE CHATROOM
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  You can choose between Facebook, Google(youtube) and Twitter to connect into the chatroom . Everybody can chat with any profile of your choice, in LIVE, at the same time, about any subjects. We don't keep any data about you. The goal is to meet together tourist and locals, and create new experiences with new people.
                  No need to create a new profile. You just have to chat and enjoy! However, be polite and respectful to other users, or we will definitely expulse you.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                ABOUT SPOT IT BILLBOARD
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  Spot it means Support persons or tourist in travels. It's a Free billboard were you can find differents needs from local persons.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                ABOUT OUR APPLICATIONS
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  Please <a href="https://thatsmontreal.com/apps">click here</a> for more informations.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                THAT'S MONTREAL RESPONSABILITY
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  That's Montreal is responsable for the delivery of the promo code, from the ''FREE GIFT BUTTON'' to your email. We are responsable of the promotion in That's Montreal system only. We are not responsable of the gift itself. If any problems about the products or service happen, the owner of the business is responsable of the situation.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                WHAT HAPPEN IF THE ''GET THE FREE GIFT'' BUTTON IS  NOT WORKING?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  We are sorry to hear this. Please refresh the page and try again. If it's not working, please try with another browser ( Safari ,Chrome, Firefox etc). If the problem persist, please contact us at <a href="mailto:info@thatsmontreal.com">info@thatsmontreal.com.</a> You don't need to contact the business in the video gift.
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
          <!-- Item -->
          <div class="cbp-item community">
            <div class="cbp-caption">
              <div class="cbp-caption-defaultWrap">
                <!-- Icon -->
                <i class="icon-people"></i>
                <!-- Title -->
                LOGIN WITH ALL OF THE SOCIAL NETWORKS
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  We are mediatouristic and mediasocialistic platform.  So we support all the social networks.  You can create account using Facebook, Twitter, GooglePlus and LinkedIn. You must be logged in to get a free gift, to share content, post comments, chat with the others, post advertisements and to have fun!
                </div>
              </div>
            </div>
          </div>
          <!--ITEM-->
        </div>
      </div>
      <!-- Modal Body End -->
    </section>
    <!-- END QUADRA FIXED MODAL -->

    <section id="map" class="mapa hidden-sm">
      <Map/>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="t-center py-5" style="background-color: #000;">
      <div class="container">
        <!-- Title -->
        <h1 class="antitle light-title white--text">
          WE ARE LOOKING FOR YOU. LET'S EXPOSE YOUR BUSINESS TO A NEW LEVEL.
        </h1>
        <!-- Strips -->
        <div class="title-strips"></div>
        <!-- Subtitle -->
        <h3 class="light xs-mt theme-primary-text">
          Who are we? Why do you chose us?
        </h3>
        <!-- Description -->
        <p class="mxw-970 container light-title description">
          We plan to reach <span class="theme-primary-text">millions of people</span> in the Metro environements, airplane screens, strategic terminals in the city, and all over the world, by smartphones and other devices.
        </p>
        <!-- Container -->
        <!-- Container -->
        <div class="container t-center">
          <!-- Row for cols -->
          <div class="row">
            <!-- Container to rotate box -->
            <div class="rotate-container hover1 col-sm-4 col-xs-12 xxs-mt" ontouchstart="this.classList.toggle('hover');">
              <div class="rotate-box">
                <!-- Front Face -->
                <div class="front bg-soft bg-gray1 bg-cover">
                  <div class="box-details">
                    <i style="color:black;font-size:2em;padding: 5px;" class="fas fa-film"></i>
                    <h4 style="color:#000">VIDEO SERVICES</h4>
                    <h5 style="color:#000">Expose yourself!</h5>
                  </div>
                </div>
                <!-- Back Face -->
                <div style="background-color:#000!important"  class="back bg-colored">
                  <div style="font-size:1.2em" class="box-details">
                    <p class="box-details-text">Headbox Medias will create the best about you and your business.  Through our videos, we will try to represent you in the way that customers will see what they want to see. </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End box -->
            <!-- Container to rotate box -->
            <div class="rotate-container hover1 col-sm-4 col-xs-12 xxs-mt" ontouchstart="this.classList.toggle('hover');">
              <div class="rotate-box">
                <!-- Front Face -->
                <div class="front bg-soft bg-gray1 bg-cover">
                  <div class="box-details">
                    <i style="color:black;font-size:2em;padding: 5px;" class="far fa-images"></i>
                    <h4 style="color:#000">PHOTOGRAPHY</h4>
                    <h5 style="color:#000">Let your true colors shine though</h5>
                  </div>
                </div>
                <!-- Back Face -->
                <div style="background-color:#000!important"  class="back bg-colored">
                  <div style="font-size:1.2em" class="box-details">
                    <p class="box-details-text">Every picture tells a story. Let us help you tell yours.</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End box -->
            <!-- Container to rotate box -->
            <div class="rotate-container hover1 col-sm-4 col-xs-12 xxs-mt" ontouchstart="this.classList.toggle('hover');">
              <div class="rotate-box">
                <!-- Front Face -->
                <div class="front bg-soft bg-gray1 bg-cover">
                  <div class="box-details">
                    <i style="color:black;font-size:2em;padding: 5px;" class="fas fa-bullhorn"></i>
                    <h4 style="color:#000">SPECIAL PROMOTIONS</h4>
                    <h5 style="color:#000">Get even more.</h5>
                  </div>
                </div>
                <!-- Back Face -->
                <div style="background-color:#000!important" class="back bg-colored">
                  <div style="font-size:1.2em" class="box-details">
                    <p class="box-details-text">Under each videos, you will find special promotions. Sign up to our platform and enjoy weekly promotions!</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End box -->
          </div>
          <!-- End Row for cols -->
        </div>
        <!-- End Container -->
      </div>
    </section>
    <!-- END ABOUT SECTION -->

    <section class="special-area" id="apps">
      <div class="container">
        <div class="row align-center">
          <div class="col-sm-6 col-xs-12 t-center order-2 order-sm-first pt-5 py-sm-0">
            <img width="100%" src="https://i.ibb.co/r2xbYj5/apps.png">
          </div>
          <div class="col-sm-6 col-xs-12 t-left">
            <div class="t-center-sm">
              <h2 class="everywhere">We are everywhere!</h2>
              <div class="p30-bot"></div>
              <p style="color:black;font-size:2em">We have a beautiful and simple app for both Android and iOS. It's totally free, so make sure to give it a go!</p>
              <div class="p25-bot"></div>
              <div class="row app-download-area">
                <div class="col-md-6 col-sm-12 col-xs-12 app-button-wrapper">
                  <a href="#" class="t-center app-button app-android flex-row align-center">
                    <div class="flex-row align-center">
                      <i class="fs24 fab fa-android"></i>
                      <div class="p5"></div>
                      <h3>Android</h3>
                    </div>
                  </a>
                </div>
                <div class="col-md-6 col-xs-12 app-button-wrapper">
                  <a href="#" class="t-center app-button app-ios flex-row align-center">
                    <div class="flex-row align-center">
                      <i class="fs24 fab fa-apple"></i>
                      <div class="p5"></div>
                      <h3>iOS</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CONTACT SECTION -->
    <section id="contact" class="contact-type-1 py-5 normal font-16">
      <!-- Contact Container -->
      <div class="container">
        <div class="row">
          <!-- Address -->
          <div class="t-left address col-sm-6 col-xs-12">
            <!-- Title -->
            <h3 class="contact-title uppercase t-center-sm no-pm">GET INVOLVED!</h3>
            <!-- Callout -->
            <div class="qdr-callout my-20 light primary-border t-center-sm">
              <h3 class="light no-pm">
                Our mediatouristic platform is 100% unique in the world.
              </h3>
              <p>
                Let's expose your local business to a new crowd, build new ideas, we want to hear from you! Our potential is to make shine yours!
              </p>
            </div>
            <div class="flex-col align-items-center align-items-sm-start">
              <div class="t-left">
                <!-- Basic Address -->
                <p>
                  <span class="fas fa-home theme-primary-text"></span>
                  <span>Montreal, H1V-2X8, Canada</span>
                </p>
                <!-- Phone -->
                <p>
                  <span class="fas fa-phone theme-primary-text"></span>
                  <a href="tel:+1.438.351.0112" class="slow normal colored-hover">+1.438.351.0112</a>
                </p>
                <!-- E-Mail -->
                <p>
                  <span class="fas fa-envelope theme-primary-text"></span>
                  <a href="mailto:info@thatsmontreal.com" class="slow normal colored-hover">info@thatsmontreal.com</a>
                </p>
                <!-- Web -->
                <p>
                  <span class="fas fa-globe theme-primary-text"></span>
                  <a href="https://thatsmontreal.com" target="_blank" class="slow normal colored-hover">www.thatsmontreal.com</a>
                </p>
              </div>
            </div>
            <!-- Google Map Button -->
            <a target="_blank" class="click-effect contact-button mt-50 primary-hover white-hover slow mt-5" href="https://www.google.com/maps/d/viewer?hl=en&msa=0&z=10&ie=UTF8&mid=1ZQ0O34TiFpL7j6P5QbJRvvXl3OI&ll=45.521607696857004%2C-73.602781">
            Show Google Map</a>
          </div>
          <!-- End Address -->
          <!-- Contact Form Area -->
          <div class="col-sm-6 col-xs-12 flex-col">
            <div class="p25-ver visible-xs"></div>
            <ContactForm/>
          </div>
          <!-- End Contact Form Area -->
        </div>
      </div>
      <!-- End Contact Container -->
    </section>
    <!-- END CONTACT SECTION -->

    <!-- FOOTER -->
    <footer id="footer" class="classic_footer font-15 normal">
      <div class="footer-bottom py-4">
        <div class="container">
          <div class="d-flex flex-md-row flex-col align-center t-center-xs">

            <div class="flex-row align-center t-left t-center-xs py-2 py-md-0 abs-third">
              <img :src="logce" alt="TSM" class="logo">
            </div>

            <div class="t-center">
              <div class="flex-col pb-4 pb-md-0">
                <h6 class="tekst xs-mt xxs-mb bold gray8">FOLLOW US</h6>
                <div class="flex-row justify-center white--text">
                  <a href="#" class="icon-xs radius bg-dark facebook slow1 mr-1"><i class="fab fa-facebook"></i></a>
                  <a href="#" class="icon-xs radius bg-dark twitter slow1 mr-1"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="icon-xs radius bg-dark instagram slow1 mr-1"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="icon-xs radius bg-dark pinterest slow1 mr-1"><i class="fab fa-pinterest"></i></a>
                </div>
              </div>
            </div>

            <div class="flex-col justify-center align-items-md-end align-items-center abs-third">
              <div class="flex-row t-center-xs" style="line-height: 1.35">
                <a href="#" target="_blank" class="gray6-hover underline-hover">Terms and Condition</a>&nbsp;|&nbsp;
                <a href="#" target="_blank" class="gray6-hover underline-hover">Privacy Policy</a>
              </div>
              <div class="flex-row t-center-xs pt-md-1" style="line-height: 1.35">
                <span>© 2020. Powered By&nbsp;</span>
                <a href="https://headboxmedias.com" target="_blank" class="colored-hover underline-hover">Headbox Medias</a>.
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
    <!-- END FOOTER -->
    <!-- Back To Top -->
    <a id="back-to-top" class="dark" href="#top"><i class="fas fa-angle-up"></i></a>
    <!-- Messages for contact form -->
    <div id="error_message" class="clearfix">
      <i class="fas fa-exclamation-triangle"></i>
      <span>Validation error occured. Please enter the fields and submit it again.</span>
    </div>
    <!-- Submit Message -->
    <div id="submit_message" class="clearfix">
      <i class="fas fa-check"></i>
      <span>Thank You ! Your email has been delivered.</span>
    </div>
  </div>
</template>