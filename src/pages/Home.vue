<script>

import home01 from '@/assets/home/images/antares/home_01.jpg'
import home02 from '@/assets/home/images/antares/home_02.jpg'
import home03 from '@/assets/home/images/antares/home_03.jpg'
import logce from '@/assets/home/images/antares/logce.png'

import ContactForm from '@/components/ContactForm'

const scripts = [
  // batch
  'jquery.min.js',
  'sharing.jquery.min.js',
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
      logce,
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
    ContactForm
  }
}
</script>

<style lang="scss">
  @import "../assets/home/css/custom.css";
  @import "../assets/home/css/plugins6da2.css";
  @import "../assets/home/css/theme6da2.css";
  @import "../assets/home/css/antares/antares.css";
  @import "../assets/home/css/revolutionslider/settings.css";
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
      <div class="columns clearfix container-xl">
        <!-- Logo -->
        <div class="logo">
          <a href="#home">
            <img :src="logce" alt="Website Logo">
          </a>
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
              Cool Places. Good Deals. <span class="colored"> Be V.I.P</span>
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
            <div class="tp-caption white nowrap uppercase rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['120','103','86','74']">
              <a href="#map" class="slow no-lightbox quadra-btn colored bg-colored1-hover border-colored2-hover white-hover">
              EXPLORE THE MAP
              </a>
            </div>
          </li>
          <!-- End Slides -->
          <!-- Slide -->
          <li data-masterspeed="1000" data-transition="fade" :data-thumb="home02" data-saveperformance="off"  data-title="Metro" data-description="Home Slider">
            <!-- Background Image -->
            <img :src="home02"  alt="Image Background"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="9" class="rev-slidebg" data-no-retina>
            <!-- Layer -->
            <div class="tp-caption gray1 dosis badscript nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-fontsize="['18','18','18','19']"
              data-type="text"
              data-transform_in="y:-50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:0;y:-20;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-100','-100','-80','-70']">
              <span>From local to </span><span class="colored">international. </span>
            </div>
            <!-- Layer -->
            <div class="tp-caption gray1 nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-50','-50','-30','-30']">
              Your talent is a value.
            </div>
            <!-- Layer -->
            <div class="tp-caption gray1 nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['20','20','15','15']">
              You god this.
            </div>
            <!-- Layer -->
            <div class="tp-caption white nowrap uppercase rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-fontsize="['15','15','15','20']"
              data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['100','95','95','75']">
              <!-- Video will be playable when you upload the files to server - Thumbnail image will come automatically. -->
              <a href="#map" class="slow no-lightbox quadra-btn colored bg-colored1-hover border-colored2-hover white-hover">
              Explore the map
              </a>
            </div>
          </li>
          <!-- Slide -->
          <li data-masterspeed="1000" data-transition="fade" :data-thumb="home03" data-saveperformance="off"  data-title="Perspective" data-description="Home Slider">
            <!-- Background Image -->
            <img :src="home03"  alt="Home Background Image"  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="9" class="rev-slidebg" data-no-retina>
            <!-- Layer -->
            <div class="tp-caption gray1 dosis badscript nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-fontsize="['18','18','18','19']"
              data-type="text"
              data-transform_in="y:-50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:0;y:-20;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-100','-100','-80','-70']">
              Interactive <a href="#map"><span class="colored"> Web </span></a> Vision
            </div>
            <!-- Layer -->
            <div class="tp-caption gray1 nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-50','-50','-30','-30']">
              Everyone who visit us
            </div>
            <!-- Layer -->
            <div class="tp-caption gray1 nowrap rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-lineheight="80"
              data-fontsize="['60','50','40','30']"
              data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:2000;e:Power3.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['20','20','15','15']">
              get out immediately.
            </div>
            <!-- Layer -->
            <div class="tp-caption white nowrap uppercase rs-parallaxlevel-0"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="2200"
              data-fontsize="['15','15','15','20']"
              data-transform_in="y:50px;opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['103','95','95','70']">
              <a href="#map" class="slow no-lightbox quadra-btn colored bg-colored1-hover border-colored2-hover white-hover">
              Explore the map
              </a>
            </div>
          </li>
        </ul>
        <!-- End Container -->
      </div>
      <!-- End Slider -->
      <!-- Home Page Note -->
      <div class="page-note fullwidth c-default clearfix">
        <!-- Left Note -->
        <div class="left-note border-colored uppercase white">
          <p>
            <i class="fas fa-globe"></i> Made for <span class="colored"> travelers.</span><br> <i class="fas fa-gift"></i> Watch videos and earn rewards. <br><i class="fab fa-rebel"></i>  Be rebel, be smart.
          </p>
        </div>
        <!-- Socials -->
        <div class="home-socials slow white">
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
      <ul id="side-dotted-navigation" class="spy font-12 bold nav uppercase">
        <li><a href="#home"><span>Home</span></a></li>
        <li><a href="#map"><span>Map</span></a></li>
        <li><a href="#about"><span>About</span></a></li>
        <li><a href="#subscribe"><span>Subscribe</span></a></li>
        <li><a href="#apps"><span>Our apps</span></a></li>
        <li><a href="#video"><span>Video</span></a></li>
        <li><a href="#contact"><span>Contact</span></a></li>
      </ul>
    </section>
    <!-- End Dotted Navigation -->

    <!-- QUADRA FIXED MODAL -->
    <section id="quadra_fixed_modal" class="faq bg-white slow-qdr" data-showme="#video" data-hideme="#footer">
      <!-- Modal title and title -->
      <div class="quadra_fixed_modal_top slow-qdr no-border">
        <!-- Button, select your color and background color. you can use data-color="#" attribute. -->
        <div id="qfm_button" class="white bg-dark">
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
                <i class="icon-trophy"></i>
                <!-- Title -->
                WHAT IS THAT'S MONTREAL AND HOW DOES IT WORK?
              </div>
              <!-- Details -->
              <div class="cbp-caption-activeWrap">
                <div class="cbp-l-caption-body">
                  We are the first Platform in the world based around the metro (metroactive platform or mediatouristic platform) located in montreal, made for travelers by local citizens and entreprenors.
                  ThatsMontreal.ca is user friendly. Once you arrived on the metro map, select 1 metro station. A video will appear. At the left of the screen, symbolic icons gives informations for international tourists. On the right, the professional video of the location.
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
                  Please write to info@thatsmontreal.ca or call at 1-438-351-0112.
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
                  Please <a href="https://thatsmontreal.ca/apps">click here</a> for more informations.
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
                  We are sorry to hear this. Please refresh the page and try again. If it's not working, please try with another browser ( Safari ,Chrome, Firefox etc). If the problem persist, please contact us at <a href="mailto:info@thatsmontreal.ca">info@thatsmontreal.ca.</a> You don't need to contact the business in the video gift.
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

    <!-- ABOUT SECTION -->
    <section id="about" class="bg-dark t-center py">
      <!-- Title -->
      <h1 class="antitle light-title white">
        WE ARE LOOKING FOR YOU. LET'S EXPOSE YOUR BUSINESS TO A NEW LEVEL.
      </h1>
      <!-- Strips -->
      <div class="title-strips"></div>
      <!-- Subtitle -->
      <h3 class="colored light xs-mt">
        Who are we? Why do you chose us?
      </h3>
      <!-- Description -->
      <p class="mxw-970 container light-title description">
        We plan to reach <span class="colored">millions of people</span> in the Metro environements, airplane screens, strategic terminals in the city, and all over the world, by smartphones and other devices.
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
              <div class="front bg-soft bg-soft-dark5 bg-cover" data-background="https://images.pond5.com/camera-lens-3d-animation-footage-076322876_prevstill.jpeg">
                <div class="box-details">
                  <h4 style="color:white">VIDEO SERVICES</h4>
                  <h5 style="color:white">Expose yourself!</h5>
                </div>
              </div>
              <!-- Back Face -->
              <div style="background-color:#006a9e!important"  class="back bg-colored">
                <div style="font-size:1.2em" class="box-details">
                  <p style="color:white">Headbox Medias will create the best about you and your business.  Through our videos, we will try to represent you in the way that customers will see what they want to see. </p>
                </div>
              </div>
            </div>
          </div>
          <!-- End box -->
          <!-- Container to rotate box -->
          <div class="rotate-container hover1 col-sm-4 col-xs-12 xxs-mt" ontouchstart="this.classList.toggle('hover');">
            <div class="rotate-box">
              <!-- Front Face -->
              <div class="front bg-soft bg-soft-dark5 bg-cover" data-background="https://udemy-images.udemy.com/course/750x422/394968_538b_7.jpg">
                <div class="box-details">
                  <h4 style="color:white">PHOTOGRAPHY</h4>
                  <h5 style="color:white">Let your true colors shine though</h5>
                </div>
              </div>
              <!-- Back Face -->
              <div style="background-color:#006a9e!important"  class="back bg-colored">
                <div style="font-size:1.2em" class="box-details">
                  <p style="color:white">Every picture tells a story.  Let us help you tell yours.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- End box -->
          <!-- Container to rotate box -->
          <div class="rotate-container hover1 col-sm-4 col-xs-12 xxs-mt" ontouchstart="this.classList.toggle('hover');">
            <div class="rotate-box">
              <!-- Front Face -->
              <div class="front bg-soft bg-soft-dark5 bg-cover" data-background="https://static1.squarespace.com/static/5817589546c3c4f1cb2a4e02/58208d4720099e9ace66e70f/5821d8e6579fb3beb3de49e1/1486036798470/how+liquide+workforce....jpg?format=1500w">
                <div class="box-details">
                  <h4 style="color:white">SPECIAL PROMOTIONS</h4>
                  <h5 style="color:white">Get even more.</h5>
                </div>
              </div>
              <!-- Back Face -->
              <div style="background-color:#006a9e!important" class="back bg-colored">
                <div style="font-size:1.2em" class="box-details">
                  <p style="color:white">Under each videos, you will find special promotions. Subscribe to us with the 3 easy steps method and enjoy weekly promotions!</p>
                </div>
              </div>
            </div>
          </div>
          <!-- End box -->
        </div>
        <!-- End Row for cols -->
      </div>
      <!-- End Container -->
    </section>
    <!-- END ABOUT SECTION -->

    <section id="subscribe">
      <div>
        <!-- Relative Container for animated gradient bg -->
        <div class="relative z-index-1 xl-py">
          <!-- Animated Gradient, you can set the bg size, colors and opacity with class -->
          <div class="animated-gradient" data-gradient-size="600" data-gradient-bg="#1a2a6c, #b21f1f, #fdbb2d, #9733EE"></div>
          <i style="display:block;margin:0 auto;font-size:5em" class="t-center white fas fa-gift hvr-buzz"></i>
          <h3 class="t-center white">GET A FREE GIFT FOR EACH VIDEO.-</h3>
          <h5 class="white t-center">Subcribe with your social media account, or send your email here.</h5>
          <div class="t-center" style="width:50%;display:block;margin:0 auto;color:white">
            <input type="text" style="margin-top:2%;color:white;" placeholder="YOUR EMAIL ADDRESS HERE:" id="subscribeBox" class="t-center classic_form big radius-lg bs-xl-hover light-placeholder bs-xl-focus">
          </div>
          <div class="t-center v-normal-mb">
            <a class="xl-btn radius-lg icon-animated slow1 dark bold bg-white bs-lg-hover" id="subscribeBtn" role="button">SUBSCRIBE</a>
          </div>
        </div>
      </div>
    </section>
    <section class="special-area appContainer" id="apps" style="background-size:'100%;100%'; background-image: url(&quot;https://image.ibb.co/eK5DR8/ap.jpg&quot;);">
      <div>
        <div>
          <div class="row">
            <div class="col-sm-6 col-xs-6 t-center">
              <div class="special_description_img">
              </div>
            </div>
            <div style="margin-top:100px" class="simsov col-sm-6 col-xs-6 t-left">
              <div class="container special_description_content">
                <h2 style="color:white">We are everywhere!</h2>
                <p style="color:white;font-size:2em">We have a beautiful and simple app for both Android and iOS.
                  It's totally free, so make sure to give it a go!
                </p>
                <div class="app-download-area">
                  <div style="padding:0px" class="col-sm-6 col-xs-6">
                    <a href="#" style="padding:30px 0px 30px 0px" class="t-center stay xl-btn py-30 block-im bg-gradient white bs-lg-hover qdr-hover-3 fs-50 fa fa-android android-btn radius slow xxs-mt click-effect">
                      <h3>Im Android</h3>
                    </a>
                  </div>
                  <div style="padding:0px;margin-bottom:10px;" class="col-sm-6 col-xs-6">
                    <a href="#" style="padding:30px 0px 30px 0px" class="t-center stay xl-btn py-30 block-im bg-gradient white bs-lg-hover qdr-hover-3 fs-50 fa fa-apple apple-btn radius slow xxs-mt click-effect">
                      <h3>Im iOS</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- VIDEO SECTION -->
    <section id="video" class="rev_slider_wrapper">
      <div id="background-video" class="rev_slider fullwidthabanner">
        <!-- Container -->
        <ul>
          <!-- Slide -->
          <li data-index="rs-01" data-title="Video"  data-description="Vimeo Video">
            <!-- Background Image -->
            <img src="https://images8.alphacoders.com/430/thumb-1920-430779.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>
            <!-- Video -->
            <div class="rs-background-video-layer"
              data-forcerewind="on"
              data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;"
              data-transform_out="opacity:0;s:1000;s:1000;"
              data-start="0"
              data-responsive_offset="on"
              data-vimeoid="284594787"
              data-videowidth="100%"
              data-videoheight="100%"
              data-videoloop="loop"
              data-videostartat="00:10"
              data-videoendat="02:00"
              data-forceCover="1"
              data-aspectratio="4:3"
              data-autoplay="on"
              data-autoplayonlyfirsttime="false"
              data-volume="2">
            </div>
            <!-- Dark Background -->
            <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0"
              id="slide-140-layer-5"
              data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
              data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
              data-width="full"
              data-height="full"
              data-transform_idle="o:1;"
              data-transform_in="opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-start="0"
              data-basealign="slide"
              data-responsive_offset="on"
              data-lasttriggerstate="reset"
              style="z-index: 1; background-color:rgba(54, 54, 54, 0.8);">
            </div>
            <!-- Title-->
            <div class="tp-caption nowrap gray1 uppercase rs-parallaxlevel-0"
              id="slide-140-layer-1"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-fontsize="['30','30','30','25']"
              data-transform_in="opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['-60','-60','-60','-60']">
              OUR VISUAL <span class="colored">DEMO</span>
            </div>
            <!-- Description -->
            <div class="tp-caption gray1 mxw-600 badscript rs-parallaxlevel-0"
              id="slide-140-layer-8"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-fontsize="['17','17','17','17']"
              data-transform_in="opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-hoffset="['0','0','0','0']"
              data-voffset="['60','60','60','60']">
              Watch the video ; Visual commercials from <a href="https://headboxmedias.com" target="_blank">Headbox Medias.</a>
            </div>
            <!-- Strip -->
            <div class="tp-caption rs-parallaxlevel-0"
              id="slide-140-layer-2"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-width="full"
              data-height="1"
              data-whitespace="nowrap"
              data-transform_idle="o:1;"
              data-transform_in="opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-start="1000"
              data-basealign="slide"
              data-responsive_offset="on"
              data-lasttriggerstate="reset"
              data-hoffset="['0','0','0','0']"
              data-voffset="['0','0','0','0']"
              style="background-color:rgba(168,168,168,0.2); width: calc(50% - 30px);">
            </div>
            <!-- Watch Video Button -->
            <div class="tp-caption rs-parallaxlevel-0 qdr-hover-1 colored uppercase"
              id="slide-140-layer-4"
              data-x="['center','center','center','center']"
              data-y="['middle','middle','middle','middle']"
              data-start="1000"
              data-fontsize="['15','15','15','15']"
              data-paddingtop="6" data-paddingbottom="6"
              data-paddingleft="20" data-paddingright="20"
              data-transform_in="opacity:0;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:100;s:100;"
              data-actions='[{"event":"click","action":"playvideo","layer":"slide-140-layer-3","delay":"1000"},{"event":"click","action":"togglelayer","layerstatus":"visible","layer":"slide-140-layer-5","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-140-layer-1","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-140-layer-2","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-140-layer-4","delay":"0"},{"event":"click","action":"togglelayer","layer":"slide-140-layer-7","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-6","delay":"0"},{"event":"click","action":"togglelayer","layer":"slide-140-layer-8","delay":"0"},{"event":"click","action":"togglelayer","layer":"slide-140-layer-9","delay":"0"}]'
              data-hoffset="['0','0','0','0']"
              data-voffset="['0','0','0','0']"
              style="background-color:rgba(91,91,91,0.8); border:1px solid rgba(91,91,91,0.9); cursor: pointer;" >
              Watch Video
            </div>
            <!-- Read More About Us Button -->
            <div class="tp-caption qdr-hover-1 px-25 py-10 c-pointer white bg-colored1 uppercase nowrap rs-parallaxlevel-0"
              id="slide-140-layer-6"
              data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
              data-y="['bottom','bottom','bottom','bottom']" data-voffset="['40','30','20','20']"
              data-fontsize="['15','15','15','15']"
              data-transform_idle="o:1;"
              data-transform_in="y:80px;opacity:1;s:1000;e:Power2.easeOut;"
              data-transform_out="opacity:0;s:300;s:300;"
              data-start="bytrigger"
              data-splitin="none"
              data-splitout="none"
              data-actions='[{"event":"click","action":"stopvideo","layer":"slide-140-layer-3","delay":"0"},{"event":"click","action":"stoplayer","layer":"slide-140-layer-6","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-5","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-1","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-2","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-7","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-4","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-8","delay":"0"},{"event":"click","action":"startlayer","layer":"slide-140-layer-9","delay":"0"}]'
              data-responsive="on"
              data-end="bytrigger"
              data-lasttriggerstate="reset">
              CLOSE
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- END VIDEO SECTION -->

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact-type-1 normal font-16">
      <!-- Contact Container -->
      <div class="container clearfix qdr-col-2">
        <!-- Address -->
        <div class="t-left address">
          <!-- Title -->
          <h3 class="contact-title uppercase no-pm">
            GET <span style="color:#007e86">INVOLVED!</span>
          </h3>
          <!-- Callout -->
          <div class="qdr-callout white-bg my-40 light border-colored">
            <h3 class="light no-pm">
              Our mediatouristic platform is 100% unique in the world.
            </h3>
            <p>
              Let's expose your local business to a new crowd, build new ideas, we want to hear from you! Our potential is to make shine yours!
            </p>
          </div>
          <div class="ikoni">
            <!-- Basic Address -->
            <p>
              <span class="fas fa-home"></span>
              <span >
              &nbsp; Montreal, H1V-2X8, Canada
              </span>
            </p>
            <!-- Phone -->
            <p>
              <span class="fas fa-phone"></span>
              <a href="tel:+1.438.351.0112" class="slow normal colored-hover"> +1.438.351.0112</a>
            </p>
            <!-- E-Mail -->
            <p>
              <span class="fas fa-envelope"></span>
              <a href="mailto:info@thatsmontreal.ca" class="slow normal colored-hover">info@thatsmontreal.ca</a>
            </p>
            <!-- Web -->
            <p>
              <span class="fas fa-globe"></span>
              <a href="https://thatsmontreal.ca" target="_blank" class="slow normal colored-hover">www.thatsmontreal.ca</a>
            </p>
          </div>
          <!-- Google Map Button -->
          <a style="margin-top:20px" href="https://www.google.com/maps/d/viewer?hl=en&msa=0&z=10&ie=UTF8&mid=1ZQ0O34TiFpL7j6P5QbJRvvXl3OI&ll=45.521607696857004%2C-73.602781" target="_blank" class="click-effect contact-button mt-50 bg-colored-hover white-hover slow">
          Show Google Map
          </a>
        </div>
        <!-- End Address -->
        <!-- Contact Form Area -->
        <ContactForm/>
        <!-- End Contact Form Area -->
      </div>
      <!-- End Contact Container -->
    </section>
    <!-- END CONTACT SECTION -->

    <!-- FOOTER -->
    <footer id="footer" class="classic_footer font-15 normal">
      <!-- Container -->
      <div class="t-center zimz footer-body container">
        <h6 class="tekst xs-mt xxs-mb bold gray8">FOLLOW US</h6>
        <a href="#" class="icon-xs radius bg-dark facebook white-hover slow1"><i class="fab fa-facebook"></i></a>
        <a href="#" class="icon-xs radius bg-dark twitter white-hover slow1"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon-xs radius bg-dark instagram white-hover slow1"><i class="fab fa-instagram"></i></a>
        <a href="#" class="icon-xs radius bg-dark pinterest white-hover slow1"><i class="fab fa-pinterest"></i></a>
      </div>
      <!-- End Column -->
      <!-- End Container -->
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row clearfix calculate-height t-center-xs">
            <div class="col-sm-6 col-xs-12 table-im t-left height-auto-mobile t-center-xs">
              <div class="v-middle">
                <img :src="logce" alt="logo icon" class="logo">
              </div>
            </div>
            <!-- Bottom Note -->
            <div class="col-sm-6 col-xs-12 table-im t-right height-auto-mobile t-center-xs xxs-mt-mobile">
              <p class="v-middle">
                <a href="#" target="_blank" class="gray6-hover underline-hover">Term and Condition</a> |
                <a href="#" target="_blank" class="gray6-hover underline-hover"> Privacy Policy</a> <br class="hidden-xs">
                <br>
                © 2018. Powered By
                <a href="https://headboxmedias.com" target="_blank" class="colored-hover underline-hover"> Headbox Medias</a>.
                <br>
                Design: <a class="colored-hover underline-hover" href="https://mrks.con.mk">MrMach</a>
              </p>
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