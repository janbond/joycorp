import{B as C}from"./BreadCrumb-cc8c0214.js";import{_ as T,P as I,m as P,k as L,r as w,o as i,c as o,a as e,n as b,b as d,q as M,v as B,s as c,u as D,F as h,d as u,e as F,t as n,w as f,p as Y,g as x}from"./index-fb991db2.js";import{F as A}from"./ForumFooter-2842d993.js";const E={components:{BreadCrumb:C,Pagination:I,ForumFooter:A},data(){return{forumSearch:"",itemPerPage:9,currentPage:1,window:{width:0,height:0},isShow:!1,isNewsSideMenuShow:!1,isNewsSideYearShow:!1,itemToggleTitle:[],itemToggleInner:[],currentSelNewsYear:null,selNewsCont:[],id:this.$route.path}},computed:{...P(["allNews","newsList","totalPage","newsCategory","isAllNewsLoading","isNewsListLoading"]),showMainCondition(){if(console.log("觸發 showMainCondition"),this.forumSearch===""&&this.selNewsCont.length===0)return"normal";if(this.forumSearch!==""&&this.selNewsCont.length===0)return"search";if(this.forumSearch===""&&this.selNewsCont.length!==0)return"date";if(this.forumSearch!==""&&this.selNewsCont.length!==0)return"normal"},resultForum(){return this.forumSearch?(console.log("正在搜尋"),this.allNews.filter(t=>{if(this.forumSearch){let l=t.noticeTitle.match(this.forumSearch);return t.noticeDetailNohtml.match(this.forumSearch)||l}})):(console.log("沒有搜尋"),this.tenNews)}},watch:{forumSearch(t,l){console.log("觸發 watch forumSearch"),this.isNewsSideMenuShow=!1,this.selNewsCont=[],this.closeNewsSideYear()}},methods:{...L(["getAllNews"]),getNewsActions(t,l){this.forumSearch="",this.selNewsCont=[],this.$store.dispatch("getNewsList",{id:t,page:l})},getCurrentPage(t){this.currentPage=t;const l=this.id;this.$store.dispatch("getNewsList",{id:l,page:t})},winCheck(){window.addEventListener("resize",this.winResize)},winResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},mobileOpen(){this.isShow=!this.isShow},openNewsSideMenu(){this.forumSearch="",console.log("this.isNewsSideMenuShow",this.isNewsSideMenuShow),this.isNewsSideMenuShow=!this.isNewsSideMenuShow},toggleTitle(t){t&&this.itemToggleTitle.push(t)},toggleInner(t){t&&this.itemToggleInner.push(t)},openNewsSideYear(t){this.currentSelNewsYear!==t&&(this.closeNewsSideYear(),this.currentSelNewsYear=t),this.itemToggleTitle[t].classList.toggle("active"),this.itemToggleInner[t].classList.toggle("active")},closeNewsSideYear(){this.itemToggleTitle.forEach(t=>{t.classList.remove("active")}),this.itemToggleInner.forEach(t=>{t.classList.remove("active")})},selNewsYear(t,l){this.forumSearch="";const r=this.newsCategory.filter(a=>a.year.id.match(t))[0].year.months.find(a=>Number(a.id)===Number(l));this.selNewsCont=r.data}},created(){this.getAllNews(),this.getNewsActions(this.id,this.currentPage)},mounted(){this.winCheck()},beforeUpdate(){this.itemToggleTitle=[],this.itemToggleInner=[]}},_=t=>(Y("data-v-a3d6db76"),t=t(),x(),t),V={class:"forumCont"},z={class:"searchBox"},j={class:"sideMenu"},O={key:0,class:"loadingMask"},R=_(()=>e("div",{class:"spinner-border text-warning",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),U=[R],q={class:"newsCategoryBlock"},H={key:0,class:"newsCategoryBox fs-5"},W=["onClick"],G=["onClick"],J={class:"forumArticleBlock"},K={class:"forumArticleList"},Q={key:0,class:"iNewsBox"},X={key:0,class:"loadingMask"},Z=_(()=>e("div",{class:"spinner-border text-warning",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),$=[Z],ee=_(()=>e("div",{class:"forumBreadCrumb"},[e("ul",null,[e("li",null," 全部 ")])],-1)),se={class:"date"},te={class:"day"},ie={class:"month"},oe={class:"year"},ne={key:0,class:"type"},ae={key:1,class:"type"},le={class:"pic"},re=["src","alt"],ce=["src","alt"],de={class:"info"},he={class:"ti"},ue={class:"txt fs-6"},_e={key:1,class:"iNewsBox"},ge=_(()=>e("div",{class:"forumBreadCrumb"},[e("ul",null,[e("li",null," 月份分類 ")])],-1)),we={class:"date"},me={class:"day"},fe={class:"month"},ve={class:"year"},ye={key:0,class:"type"},Ne={key:1,class:"type"},pe={class:"pic"},Se=["src","alt"],ke=["src","alt"],Ce={class:"info"},Te={class:"ti"},Ie={class:"txt fs-6"},Pe={key:2,class:"iNewsBox"},Le=_(()=>e("div",{class:"forumBreadCrumb"},[e("ul",null,[e("li",null," 搜尋結果 ")])],-1)),be={class:"date"},Me={class:"day"},Be={class:"month"},De={class:"year"},Fe={key:0,class:"type"},Ye={key:1,class:"type"},xe={class:"pic"},Ae=["src","alt"],Ee=["src","alt"],Ve={class:"info"},ze={class:"ti"},je={class:"txt fs-6"};function Oe(t,l,v,N,r,a){const y=w("font-awesome-icon"),m=w("router-link"),p=w("Pagination"),S=w("ForumFooter");return i(),o("div",null,[e("div",V,[e("section",{class:b(["forumSidebar",{open:r.isShow}]),ref:"mobileOpenRef"},[e("div",{class:"mobileBtn",onClick:l[0]||(l[0]=s=>a.mobileOpen())},[d(y,{icon:["fas","angle-right"]})]),e("div",z,[d(y,{icon:["fas","magnifying-glass"],class:"glass"}),M(e("input",{type:"text",class:"form-control fs-5",id:"search",placeholder:"","onUpdate:modelValue":l[1]||(l[1]=s=>r.forumSearch=s)},null,512),[[B,r.forumSearch]])]),e("div",j,[t.isAllNewsLoading===!0?(i(),o("div",O,U)):c("",!0),e("ul",null,[e("li",null,[e("button",{type:"button",class:"fs-5",onClick:l[2]||(l[2]=D(s=>a.getNewsActions(),["prevent"]))},"全部")]),e("li",null,[e("div",q,[e("button",{type:"button",class:"fs-5",onClick:l[3]||(l[3]=s=>a.openNewsSideMenu())},"新聞"),r.isNewsSideMenuShow?(i(),o("div",H,[(i(!0),o(h,null,u(t.newsCategory,(s,k)=>(i(),o("div",{class:"yearMenu",key:s.id},[e("div",{class:"openYearBtn",onClick:g=>a.openNewsSideYear(k),ref_for:!0,ref:a.toggleTitle},"‧"+n(s.year.id)+"年",9,W),e("div",{class:"openYearList",ref_for:!0,ref:a.toggleInner},[e("ul",null,[(i(!0),o(h,null,u(s.year.months,g=>(i(),o("li",{key:g.id,onClick:Re=>a.selNewsYear(s.year.id,g.id)},"└─"+n(s.year.id)+"年"+n(g.id)+"月",9,G))),128))])],512)]))),128))])):c("",!0)])])])])],2),e("section",J,[e("div",K,[a.showMainCondition==="normal"?(i(),o("div",Q,[t.isNewsListLoading===!0?(i(),o("div",X,$)):c("",!0),ee,(i(!0),o(h,null,u(t.newsList,s=>(i(),o("div",{class:"iNewsList",key:s.noticeIndex},[e("div",se,[e("div",te,n(t.dataTranslate.day(s.createDate)),1),e("div",ie,n(t.dataTranslate.month(s.createDate)),1),e("div",oe,n(s.createDate.slice(0,4)),1),s.typeName!==null?(i(),o("div",ne,n(s.typeName),1)):(i(),o("div",ae,"新聞稿"))]),e("div",le,[s.coverImage!==""?(i(),o("img",{key:0,src:s.coverImage,alt:s.noticeTitle},null,8,re)):(i(),o("img",{key:1,src:"./images/g_news_list_def.jpg",alt:s.noticeTitle},null,8,ce))]),e("div",de,[d(m,{to:`forum-article/${s.noticeIndex}`,class:"link"},{default:f(()=>[e("div",he,n(s.noticeTitle),1),e("div",ue,n(s.noticeDetailNohtml),1)]),_:2},1032,["to"])])]))),128))])):c("",!0),a.showMainCondition==="date"?(i(),o("div",_e,[ge,(i(!0),o(h,null,u(r.selNewsCont,s=>(i(),o("div",{class:"iNewsList",key:s.noticeIndex},[e("div",we,[e("div",me,n(t.dataTranslate.day(s.createDate)),1),e("div",fe,n(t.dataTranslate.month(s.createDate)),1),e("div",ve,n(s.createDate.slice(0,4)),1),s.typeName!==null?(i(),o("div",ye,n(s.typeName),1)):(i(),o("div",Ne,"新聞稿"))]),e("div",pe,[s.coverImage!==""?(i(),o("img",{key:0,src:s.coverImage,alt:s.noticeTitle},null,8,Se)):(i(),o("img",{key:1,src:"./images/g_news_list_def.jpg",alt:s.noticeTitle},null,8,ke))]),e("div",Ce,[d(m,{to:`forum-article/${s.noticeIndex}`,class:"link"},{default:f(()=>[e("div",Te,n(s.noticeTitle),1),e("div",Ie,n(s.noticeDetailNohtml),1)]),_:2},1032,["to"])])]))),128))])):c("",!0),a.showMainCondition==="search"?(i(),o("div",Pe,[Le,(i(!0),o(h,null,u(a.resultForum,s=>(i(),o("div",{class:"iNewsList",key:s.noticeIndex},[e("div",be,[e("div",Me,n(t.dataTranslate.day(s.createDate)),1),e("div",Be,n(t.dataTranslate.month(s.createDate)),1),e("div",De,n(s.createDate.slice(0,4)),1),s.typeName!==null?(i(),o("div",Fe,n(s.typeName),1)):(i(),o("div",Ye,"新聞稿"))]),e("div",xe,[s.coverImage!==""?(i(),o("img",{key:0,src:s.coverImage,alt:s.noticeTitle},null,8,Ae)):(i(),o("img",{key:1,src:"./images/g_news_list_def.jpg",alt:s.noticeTitle},null,8,Ee))]),e("div",Ve,[d(m,{to:`forum-article/${s.noticeIndex}`,class:"link"},{default:f(()=>[e("div",ze,n(s.noticeTitle),1),e("div",je,n(s.noticeDetailNohtml),1)]),_:2},1032,["to"])])]))),128))])):c("",!0),a.showMainCondition==="normal"?(i(),F(p,{key:3,pages:t.totalPage,currentPage:r.currentPage,onEmitPage:a.getCurrentPage,onEmitSelectPage:a.getCurrentPage,onEmitInputPage:a.getCurrentPage},null,8,["pages","currentPage","onEmitPage","onEmitSelectPage","onEmitInputPage"])):c("",!0)]),d(S)])])])}const We=T(E,[["render",Oe],["__scopeId","data-v-a3d6db76"]]);export{We as default};
