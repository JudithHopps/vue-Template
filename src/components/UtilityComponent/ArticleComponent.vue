<template>
    <ul>
      <li
        v-for="(article, i) in articles"
        :style="`background-image: url(${article.backgroundUrl});`"
        role="button"
        :class="active === i ? 'active' : ''"
        @click="() => (active = i)"
        :key="i"
      >
        
        <h3>{{ article.title }}</h3>
        
        <div class="section-content">
          <div class="inner">
            <div class="bio">
              <h2>{{ article.title }}</h2>
              <p>
                {{ article.description }}
              </p>
  
              <a
                :href="article.siteUrl"
                target="_blank"
                class="article-profile-link md:hidden"
              >
                <img
                  src="@/assets/articleButton.jpg"
                  alt="Listen on Spotify"
                  width="150"
                  loading="lazy"
                  class ="Btn"
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
  const active= ref(0);
  
  const articles = [
    {
    "title": "STARBUCKS",
    "description": "스타벅스는 세계에서 가장 큰 다국적 커피 전문점이다. 64개국에서 총 23,187개의 매점을 운영하고 있다.",
    "siteUrl": "https://www.starbucks.co.kr/index.do",
    "backgroundUrl": "https://postfiles.pstatic.net/MjAyMzAxMjRfNDkg/MDAxNjc0NTYwOTQxNDE0.moz6RkKpjRYKI55POnaIls5afwsk4T9fEa216nnL-tgg.nPICI5YTdP4JTApNiC5m7-7PC_iC6zd0uBTWrsci_Ycg.PNG.kookjeayon/starbucks.png?type=w580"
  },
  {
    "title": "HOLLYSCOFFEE",
    "description": "할리스커피는 2017년 10월 말 500여개의 매장을 운영하고 있으며 15개국과 마스터프랜차이즈를 통해 전 세계 각국에 매장을 확장해 나가고 있는 한국 최초의 브랜드다.",
    "siteUrl": "https://www.hollys.co.kr/",
    "backgroundUrl": "https://postfiles.pstatic.net/MjAyMzAxMjRfODYg/MDAxNjc0NTYwOTQxNDE0.9WMWQDyWXd3IDnwhWo_b5xLHcdKXvmSHhwxkShHDLmAg.Kf0hdktfIhztD6Yafz4cmb6fUSc22Y15QssVRLRaeoAg.PNG.kookjeayon/hollys.png?type=w580"
  },
  {
    "title": "Angel-in-us-Coffee",
    "description": "엔제리너스는 롯데GRS에서 운영하는 카페 프랜차이즈이다. 2000년 자바커피 사업을 시작하면서 같은해 6월 1호점을 개점한 이후, 2006년 12월 현재의 브랜드로 변경되었다.",
    "siteUrl": "https://www.angelinus.com/",
    "backgroundUrl": "https://postfiles.pstatic.net/MjAyMzAxMjRfMzAg/MDAxNjc0NTYxMTAzNTgx.ieMr5RtcsirhtwayUxEXyaOn7RxDu6Xmo3_9FfIQUPkg.5mbn_qioIYkwSUxMYG1N28Xm21s-baPubKelmIcJ7F0g.JPEG.kookjeayon/angel.jpg?type=w580"
  },
  {
    "title": "EDIYA",
    "description": "이디야커피는 대한민국의 커피 전문 체인점이다. 매장 수 규모로 카페베네에 이어 대한민국에서 2번째였지만, 최근 매장 수 규모 1위로 올라섰다. 이디야는 에티오피아 말로 ‘대륙의 황제’를 의미한다.",
    "siteUrl": "https://www.ediya.com",
    "backgroundUrl": "http://m.ediyastore.com/24d/lr_about_290625/img/m_con_img02.gif"
  },
  {
    "title": "A Twosome Place",
    "description": "투썸플레이스는 디저트 카페 프랜차이즈 기업이다. 2002년 신촌점을 시작으로 2018년 현재 전국에 1,000여개의 점포를 운영하고 있다.",
    "siteUrl": "https://www.twosome.co.kr/",
    "backgroundUrl": "https://postfiles.pstatic.net/MjAyMzAxMjRfMjY5/MDAxNjc0NTYxMTM1MDI2.Kn4RUq4_q51zQPJMbqPq2T_IwUqkAnMohSDJcUF-TLgg.jYY0ITRUd4i3b5eoWeCWtZEfc6y-uRjXMQgRMu-OdhQg.PNG.kookjeayon/twosome.png?type=w580"
  }
  ]
  
</script>

<style scoped>

body {
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  line-height: 24px;
  font-size: 16px;
}

.bio {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
}

ul {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;
}
@media only screen and (min-width: 1280px) {
  ul {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;
}
li.active {
  flex: 6;
  cursor: default;
}
li.active:before {
  background: linear-gradient(0deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
}

h2 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  -webkit-text-stroke: 0.3px black;
}
@media only screen and (min-width: 768px) {
  h2 {
    font-size: 48px;
    line-height: 48px;
  }
}
@media only screen and (max-width: 1280px) {
  h2 {
    font-size: 64px;
    line-height: 64px;
  }
}

h3 {
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);
}
@media only screen and (min-width: 1280px) {
  h3 {
    top: 100%;
    left: 50%;
    font-size: 22px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }
}
.active h3 {
  opacity: 0;
  top: 200%;
}

.section-content {
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;
}
.active .section-content {
  opacity: 1;
}
.section-content .inner {
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  align-items: flex-end;
  left: 0;
  bottom: 0;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-out;
}
@media only screen and (min-width: 768px) {
  .section-content .inner {
    grid-auto-flow: column;
    grid-template-columns: calc(100% - 340px) 300px;
    grid-column-gap: 40px;
    padding: 40px;
  }
}
@media only screen and (max-width: 1280px) {
  .section-content .inner {
    grid-auto-flow: column;
    grid-template-columns: 460px 200px;
    grid-column-gap: 40px;
    padding: 40px;
  }
}
.active .section-content .inner {
  opacity: 1;
}

.article-profile-link {
  pointer-events: none;
}
.active .article-profile-link {
  pointer-events: all;
}

.Btn {
  border-radius: 5%;
}
</style>