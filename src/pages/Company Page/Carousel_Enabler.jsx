import { useState, useEffect } from "react";
import CardContainer from "./Carousel_Circle";
import { fetchImage } from "../../hooks/image-hook";

function EnablerPage({ data }) {
  const [profilePics, setProfilePics] = useState({});
  const [banners, setBanners] = useState({});
  const [currentEnabler, setCurrentEnabler] = useState();

  useEffect(() => {
    const fetchProfilePics = async () => {
      const pics = {};
      for (const profilePic of data) {
        const picBlob = await fetchProfilePic(profilePic.setting_profilepic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[profilePic.setting_id] = picUrl;
      }
      setProfilePics(pics);
    };

    const fetchCoverPics = async () => {
      const pics = {};
      for (const coverPic of data) {
        const picBlob = await fetchBanner(coverPic.setting_coverpic);
        const picUrl = URL.createObjectURL(picBlob);
        pics[coverPic.setting_id] = picUrl;
      }
      setBanners(pics);
    };

    fetchProfilePics();
    fetchCoverPics();
  }, [data]);

  // useEffect(() => {
  //   console.log("Current Enabler:", currentEnabler); // Log the current enabler whenever it changes
  // }, [currentEnabler]);

  const fetchProfilePic = async (profile_pic_name) => {
    const profilePic = await fetchImage(`profile-img/${profile_pic_name}`);
    return profilePic;
  };

  const fetchBanner = async (banner_pic_name) => {
    const bannerPic = await fetchImage(`profile-cover-img/${banner_pic_name}`);
    return bannerPic;
  };

  const imageUrls = [
    "./src/assets/logos/roompal.jpg",
    "./src/assets/logos/cushy.jpg",
    "./src/assets/logos/devcon.jpg",
    "./src/assets/logos/nostalgicthreads.jpg",
    "./src/assets/logos/andale.jpg",
  ];

  return (
    <div className="bg-companyBG relative flex justify-center overflow-hidden">
      <div className="max-h-[1000px] max-w-[2050px] flex justify-center relative">
        <div class="overflow-visible translate-y-[-300px]">
          <img
            src={banners[currentEnabler?.setting_id]}
            className="w-screen h-[900px] object-cover"
          />
        </div>

        <div className="absolute h-full w-full bg-companyBG opacity-75"></div>

        <div className="absolute top-0 left-0 ml-5">
          <h1 className="text-white text-9xl font-bold mt-20 p-12">
            {currentEnabler?.setting_institution}
          </h1>
          <p className="w-4/6 ml-16  text-xl">
            {currentEnabler?.setting_bio} Lorem ipsum dolor sit amet. Et dicta
            suscipit sed debitis minima et autem dolorem et voluptatem nemo et
            facere quaerat! Non voluptatem magni et voluptas galisum qui eveniet
            quis qui maiores cumque. Est necessitatibus consequatur et
            consequuntur quae qui omnis earum eum inventore enim sed debitis
            omnis hic illum mollitia id aliquid atque. Ab maiores totam et
            molestiae amet 33 earum quia et necessitatibus necessitatibus. Et
            dicta excepturi hic illum cumque sit doloribus voluptas qui natus
            eligendi hic.
          </p>
        </div>
        <svg
          class="absolute  h-[990px] w-[2050px] bottom-[-100px]"
          viewBox="0 0 1440 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="343" width="100%" height="40%" fill="white" />
          <path d="M1015.5 202.5L1440 0V346H701L1015.5 202.9Z" fill="white" />
        </svg>

        <div className="absolute bottom-24 left-0 ml-5 ">
          <div className="App mb-5">
            <CardContainer
              imageUrls={profilePics}
              data={data}
              onChangeEnabler={setCurrentEnabler}
            />
          </div>
        </div>

        <div className="absolute bottom-20 right-24">
          <svg
            width="430"
            height="383"
            viewBox="0 0 430 383"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70837 0C1.25543 0.000497105 0.82119 0.180514 0.500916 0.50056C0.180642 0.820606 0.000497459 1.25454 0 1.70715V59.9345C0.000497459 60.3871 0.180642 60.8211 0.500916 61.1411C0.82119 61.4611 1.25543 61.6412 1.70837 61.6417H200.396C200.849 61.6412 201.283 61.4611 201.603 61.1411C201.923 60.8211 202.104 60.3871 202.104 59.9345V1.70715C202.104 1.25454 201.923 0.820606 201.603 0.50056C201.283 0.180514 200.849 0.000497105 200.396 0H1.70837Z"
              fill="#08112F"
            />
            <path
              d="M4.2793 57.3638H197.821V4.27734H4.2793V57.3638Z"
              fill="white"
            />
            <path
              d="M173.393 46.3516C173.021 46.3516 172.653 46.4247 172.31 46.5668C171.966 46.709 171.654 46.9173 171.391 47.1799C171.129 47.4425 170.92 47.7542 170.778 48.0974C170.636 48.4405 170.562 48.8082 170.562 49.1796C170.562 49.551 170.636 49.9187 170.778 50.2619C170.92 50.605 171.129 50.9167 171.391 51.1793C171.654 51.4419 171.966 51.6503 172.31 51.7924C172.653 51.9345 173.021 52.0077 173.393 52.0077H184.712C185.084 52.0077 185.452 51.9345 185.795 51.7924C186.139 51.6503 186.451 51.4419 186.713 51.1793C186.976 50.9167 187.185 50.605 187.327 50.2619C187.469 49.9187 187.542 49.551 187.542 49.1796C187.542 48.8082 187.469 48.4405 187.327 48.0974C187.185 47.7542 186.976 47.4425 186.713 47.1799C186.451 46.9173 186.139 46.709 185.795 46.5668C185.452 46.4247 185.084 46.3516 184.712 46.3516H173.393Z"
              fill="#5C9FEF"
            />
            <path
              d="M187.542 40.8672H56.8691V41.6115H187.542V40.8672Z"
              fill="#E6E6E6"
            />
            <path
              d="M29.5532 47.294C38.6565 47.294 46.0362 39.9196 46.0362 30.8228C46.0362 21.726 38.6565 14.3516 29.5532 14.3516C20.45 14.3516 13.0703 21.726 13.0703 30.8228C13.0703 39.9196 20.45 47.294 29.5532 47.294Z"
              fill="#E6E6E6"
            />
            <path
              d="M57.0769 36.7102L56.6641 36.0911L70.2427 27.0451L79.5539 31.5117L92.9471 22.9609L93.1281 23.0379L119.59 34.3182L140.807 23.9031L161.409 32.2498L187.297 37.5084L187.79 38.0655L161.557 33.1131L140.835 24.7175L119.611 35.1358L93.016 23.7992L79.6046 32.3613L70.3016 27.899L57.0769 36.7102Z"
              fill="#FF7A00"
            />
            <path
              d="M59.2893 46.7386C58.6543 46.7488 58.0488 47.0081 57.6033 47.4604C57.1579 47.9128 56.9082 48.522 56.9082 49.1566C56.9082 49.7912 57.1579 50.4004 57.6033 50.8528C58.0488 51.3051 58.6543 51.5644 59.2893 51.5746H84.6048C85.246 51.584 85.8648 51.3388 86.3251 50.8927C86.7855 50.4466 87.0499 49.8361 87.0602 49.1953C87.0705 48.5546 86.8258 47.9359 86.38 47.4753C85.9342 47.0147 85.3236 46.7497 84.6824 46.7386C84.6566 46.7382 84.6307 46.7382 84.6048 46.7386H59.2893Z"
              fill="#E6E6E6"
            />
            <path
              d="M36.1847 30.6177C35.9994 30.4325 35.7479 30.3284 35.4858 30.3284C35.2236 30.3284 34.9722 30.4324 34.7868 30.6177L30.5431 34.8582V24.4015C30.541 24.1409 30.4359 23.8918 30.2507 23.7083C30.0656 23.5248 29.8154 23.4219 29.5546 23.4219C29.2939 23.4219 29.0436 23.5248 28.8585 23.7083C28.6733 23.8918 28.5682 24.1409 28.5661 24.4015V34.8582L24.3225 30.6177C24.1374 30.4327 23.8865 30.3285 23.6247 30.3282C23.3629 30.3278 23.1117 30.4312 22.9261 30.6157C22.7405 30.8002 22.6357 31.0507 22.6348 31.3123C22.6338 31.5739 22.7367 31.8252 22.9209 32.0111L22.9245 32.0147L28.8556 37.9415C29.041 38.1268 29.2924 38.2309 29.5546 38.2309C29.8168 38.2309 30.0682 38.1268 30.2536 37.9415L36.1847 32.0147C36.3701 31.8294 36.4742 31.5782 36.4742 31.3162C36.4742 31.0542 36.3701 30.803 36.1847 30.6177Z"
              fill="white"
            />
            <path
              d="M83.7084 95C83.2554 95.0005 82.8212 95.1805 82.5009 95.5006C82.1806 95.8206 82.0005 96.2546 82 96.7072V154.935C82.0005 155.387 82.1806 155.821 82.5009 156.141C82.8212 156.461 83.2554 156.641 83.7084 156.642H282.396C282.849 156.641 283.284 156.461 283.604 156.141C283.924 155.821 284.104 155.387 284.105 154.935V96.7072C284.104 96.2546 283.924 95.8206 283.604 95.5006C283.284 95.1805 282.849 95.0005 282.396 95H83.7084Z"
              fill="#E6E6E6"
            />
            <path
              d="M86.2812 152.364H279.823V99.2773H86.2812V152.364Z"
              fill="#08112F"
            />
            <path
              d="M255.394 141.352C254.644 141.352 253.924 141.65 253.393 142.18C252.863 142.71 252.564 143.43 252.564 144.18C252.564 144.93 252.863 145.649 253.393 146.179C253.924 146.71 254.644 147.008 255.394 147.008H266.713C267.463 147.008 268.183 146.71 268.714 146.179C269.245 145.649 269.543 144.93 269.543 144.18C269.543 143.43 269.245 142.71 268.714 142.18C268.183 141.65 267.463 141.352 266.713 141.352H255.394Z"
              fill="#5C9FEF"
            />
            <path
              d="M269.544 135.867H138.871V136.612H269.544V135.867Z"
              fill="#E6E6E6"
            />
            <path
              d="M111.555 142.294C120.658 142.294 128.038 134.92 128.038 125.823C128.038 116.726 120.658 109.352 111.555 109.352C102.452 109.352 95.0723 116.726 95.0723 125.823C95.0723 134.92 102.452 142.294 111.555 142.294Z"
              fill="#5C9FEF"
            />
            <path
              d="M139.078 131.709L138.664 131.09L152.243 122.044L161.554 126.511L174.948 117.96L175.129 118.037L201.59 129.317L222.807 118.902L243.41 127.248L269.297 104.336L269.791 104.893L243.557 128.11L222.836 119.715L201.612 130.133L175.017 118.796L161.606 127.358L152.305 122.898L139.078 131.709Z"
              fill="#FF7A00"
            />
            <path
              d="M141.291 141.739C140.65 141.728 140.03 141.973 139.569 142.419C139.108 142.865 138.843 143.476 138.832 144.117C138.822 144.759 139.067 145.378 139.513 145.839C139.96 146.299 140.571 146.564 141.213 146.575C141.239 146.575 141.265 146.575 141.291 146.575H166.607C167.242 146.564 167.848 146.305 168.293 145.853C168.738 145.4 168.988 144.791 168.988 144.157C168.988 143.522 168.738 142.913 168.293 142.46C167.848 142.008 167.242 141.749 166.607 141.739H141.291Z"
              fill="#E6E6E6"
            />
            <path
              d="M104.926 126.027C105.018 126.119 105.127 126.192 105.247 126.241C105.367 126.291 105.495 126.317 105.625 126.317C105.755 126.317 105.884 126.291 106.003 126.241C106.123 126.192 106.232 126.119 106.324 126.027L110.568 121.787V132.243C110.568 132.505 110.672 132.757 110.857 132.942C111.043 133.127 111.294 133.231 111.556 133.231C111.819 133.231 112.07 133.127 112.255 132.942C112.441 132.757 112.545 132.505 112.545 132.243V121.787L116.789 126.027C116.88 126.119 116.989 126.192 117.109 126.241C117.229 126.291 117.358 126.317 117.488 126.317C117.617 126.317 117.746 126.291 117.866 126.241C117.986 126.192 118.095 126.119 118.187 126.027C118.278 125.936 118.351 125.827 118.401 125.707C118.45 125.587 118.476 125.459 118.476 125.329C118.476 125.199 118.45 125.071 118.401 124.951C118.351 124.831 118.278 124.722 118.186 124.63L112.255 118.703C112.07 118.518 111.819 118.414 111.556 118.414C111.294 118.414 111.043 118.518 110.857 118.703L104.926 124.63C104.741 124.816 104.637 125.067 104.637 125.329C104.637 125.591 104.741 125.842 104.926 126.027Z"
              fill="white"
            />
            <path
              d="M14.7084 187C14.2554 187 13.8212 187.181 13.5009 187.501C13.1807 187.821 13.0005 188.255 13 188.707V246.935C13.0005 247.387 13.1807 247.821 13.5009 248.141C13.8212 248.461 14.2554 248.641 14.7084 248.642H213.396C213.849 248.641 214.283 248.461 214.603 248.141C214.923 247.821 215.104 247.387 215.104 246.935V188.707C215.104 188.255 214.923 187.821 214.603 187.501C214.283 187.181 213.849 187 213.396 187H14.7084Z"
              fill="#08112F"
            />
            <path
              d="M17.2812 244.364H210.823V191.277H17.2812V244.364Z"
              fill="white"
            />
            <path
              d="M186.393 233.352C185.642 233.352 184.922 233.65 184.391 234.18C183.861 234.71 183.562 235.43 183.562 236.18C183.562 236.93 183.861 237.649 184.391 238.179C184.922 238.71 185.642 239.008 186.393 239.008H197.712C198.463 239.008 199.183 238.71 199.713 238.179C200.244 237.649 200.542 236.93 200.542 236.18C200.542 235.43 200.244 234.71 199.713 234.18C199.183 233.65 198.463 233.352 197.712 233.352H186.393Z"
              fill="#5C9FEF"
            />
            <path
              d="M200.542 227.867H69.8691V228.612H200.542V227.867Z"
              fill="#E6E6E6"
            />
            <path
              d="M42.5552 234.294C51.6585 234.294 59.0381 226.92 59.0381 217.823C59.0381 208.726 51.6585 201.352 42.5552 201.352C33.4519 201.352 26.0723 208.726 26.0723 217.823C26.0723 226.92 33.4519 234.294 42.5552 234.294Z"
              fill="#5C9FEF"
            />
            <path
              d="M70.0769 223.713L69.6641 223.094L83.2427 214.047L92.5539 218.514L105.948 209.961L132.59 221.317L153.807 210.902L174.407 219.251L200.294 208.859L200.788 209.417L174.558 220.115L153.836 211.72L132.612 222.138L106.017 210.801L92.6065 219.364L83.3035 214.902L70.0769 223.713Z"
              fill="#FF7A00"
            />
            <path
              d="M72.2893 233.739C71.6543 233.749 71.0488 234.008 70.6033 234.46C70.1579 234.913 69.9082 235.522 69.9082 236.157C69.9082 236.791 70.1579 237.4 70.6033 237.853C71.0488 238.305 71.6543 238.564 72.2893 238.575H97.6048C97.9225 238.58 98.2382 238.522 98.5338 238.406C98.8293 238.289 99.099 238.115 99.3273 237.894C99.5557 237.673 99.7383 237.41 99.8646 237.118C99.991 236.827 100.059 236.513 100.064 236.196C100.069 235.878 100.012 235.563 99.8948 235.268C99.778 234.972 99.6041 234.703 99.3831 234.475C99.162 234.246 98.8982 234.064 98.6066 233.938C98.315 233.811 98.0013 233.744 97.6836 233.739C97.6573 233.738 97.631 233.738 97.6048 233.739H72.2893Z"
              fill="#E6E6E6"
            />
            <path
              d="M35.9243 218.027C36.0161 218.119 36.1251 218.192 36.245 218.241C36.3649 218.291 36.4934 218.317 36.6233 218.317C36.7531 218.317 36.8816 218.291 37.0015 218.241C37.1215 218.192 37.2305 218.119 37.3223 218.027L41.5659 213.787V224.243C41.5671 224.504 41.6713 224.754 41.8559 224.938C42.0405 225.122 42.2904 225.226 42.5513 225.227C42.8121 225.228 43.0628 225.125 43.2485 224.942C43.4343 224.759 43.5401 224.51 43.543 224.25V213.787L47.7865 218.027C47.9714 218.213 48.2226 218.318 48.4848 218.318C48.747 218.319 48.9987 218.216 49.1845 218.031C49.3704 217.846 49.4752 217.595 49.4759 217.333C49.4765 217.071 49.373 216.82 49.1881 216.634L49.1845 216.63L43.2534 210.703C43.068 210.518 42.8166 210.414 42.5544 210.414C42.2923 210.414 42.0408 210.518 41.8554 210.703L35.9243 216.63C35.8325 216.722 35.7597 216.831 35.71 216.951C35.6603 217.071 35.6348 217.199 35.6348 217.329C35.6348 217.458 35.6603 217.587 35.71 217.707C35.7597 217.827 35.8325 217.936 35.9243 218.027Z"
              fill="white"
            />
            <path
              d="M381.467 373.361L371.927 373.36L367.389 336.59L381.468 336.59L381.467 373.361Z"
              fill="#FFB7B7"
            />
            <path
              d="M383.9 382.604L353.139 382.603V382.214C353.139 379.041 354.4 375.998 356.646 373.754C358.891 371.511 361.936 370.25 365.112 370.25H365.112L383.9 370.251L383.9 382.604Z"
              fill="#08112F"
            />
            <path
              d="M346.45 373.361L336.91 373.36L332.371 336.59L346.452 336.59L346.45 373.361Z"
              fill="#FFB7B7"
            />
            <path
              d="M348.882 382.604L318.121 382.603V382.214C318.121 379.041 319.383 375.998 321.628 373.754C323.874 371.511 326.919 370.25 330.094 370.25H330.095L348.883 370.251L348.882 382.604Z"
              fill="#08112F"
            />
            <path
              d="M328.468 254.094C329.295 253.42 329.963 252.573 330.426 251.612C330.889 250.652 331.136 249.602 331.149 248.536C331.162 247.47 330.942 246.415 330.502 245.443C330.063 244.472 329.416 243.609 328.606 242.914L333.792 227.078L324.93 221.582L317.921 244.049C316.844 245.485 316.331 247.266 316.48 249.054C316.629 250.843 317.43 252.514 318.73 253.753C320.03 254.991 321.739 255.71 323.534 255.772C325.329 255.835 327.085 255.238 328.468 254.094Z"
              fill="#FFB7B7"
            />
            <path
              d="M337.921 243.641C337.921 243.641 329.017 291.807 329.128 301.157C329.262 312.439 334.286 360.794 334.286 360.794L347.076 357.598L349.494 301.553L359.61 265.784L363.501 311.662L367.406 359.922H382.244L385.568 238.848L337.122 237.25L337.921 243.641Z"
              fill="#08112F"
            />
            <path
              d="M382.288 146.582L356.707 147.381L340.719 246.437C340.719 246.437 374.693 262.014 389.083 250.83C403.472 239.647 382.288 146.582 382.288 146.582Z"
              fill="#D9D9D9"
            />
            <path
              d="M360.305 167.75L338.721 291.57L325.131 287.576L334.724 242.841L339.52 198.106L338.721 153.371L355.508 146.182L360.305 140.59C360.305 140.59 369.898 152.572 360.305 167.75Z"
              fill="#5C9FEF"
            />
            <path
              d="M371.496 164.728L373.095 294.765L405.87 289.174L403.472 168.549L406.67 151.774L390.681 144.584L384.208 140.59C384.208 140.59 369.897 144.93 371.496 164.728Z"
              fill="#5C9FEF"
            />
            <path
              d="M345.916 155.767L338.721 153.371L328.329 199.703L319.535 236.45L332.326 238.847L344.317 198.905L345.916 155.767Z"
              fill="#5C9FEF"
            />
            <path
              d="M417.987 261.871C417.161 261.197 416.493 260.35 416.03 259.39C415.567 258.43 415.32 257.38 415.307 256.314C415.293 255.248 415.514 254.192 415.954 253.221C416.393 252.249 417.04 251.386 417.849 250.692L412.664 234.855L421.526 229.359L428.534 251.826C429.612 253.262 430.124 255.043 429.975 256.831C429.826 258.62 429.026 260.292 427.726 261.53C426.426 262.768 424.717 263.487 422.922 263.55C421.127 263.613 419.371 263.015 417.987 261.871Z"
              fill="#FFB7B7"
            />
            <path
              d="M399.762 154.213L406.956 151.816L417.348 198.149L426.92 244.226L412.524 246.343L401.36 197.35L399.762 154.213Z"
              fill="#5C9FEF"
            />
            <path
              d="M379.776 134.056C388.387 129.353 391.551 118.565 386.844 109.961C382.137 101.356 371.342 98.194 362.731 102.898C354.121 107.601 350.956 118.389 355.663 126.994C360.37 135.598 371.166 138.76 379.776 134.056Z"
              fill="#FFB7B7"
            />
            <path
              d="M365.059 95.2413C382.044 90.3466 386.866 104.415 386.866 104.415C395.053 109.843 389.927 116.648 389.927 116.648C391.993 117.107 387.862 129.187 386.485 128.882C385.75 128.719 383.86 130.973 382.258 133.111C381.708 133.11 381.16 133.163 380.62 133.268L383.73 121.771C383.73 121.771 373.247 120.166 370.034 115.12C366.959 110.293 356.836 108.768 353.956 111.993C353.785 111.066 353.437 110.181 352.928 109.386C352.535 108.783 352.021 108.268 351.418 107.873C353.965 97.0572 365.059 95.2413 365.059 95.2413Z"
              fill="#2F2E41"
            />
          </svg>

          <button class="bg-transparent text-CustomOrange py-2 px-4">
            Visit Startup Enablers
          </button>
          <button class="bg-CustomOrange transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out text-white py-2 px-12 border border-CustomOrange rounded">
            Create Account
          </button>
        </div>
      </div>

      {/* <div className="flex w-full h-dvh bg-orange-500"> </div> */}
    </div>
  );
}

export default EnablerPage;
