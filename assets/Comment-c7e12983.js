import{u as B,E as V}from"./loading-8ac447e7.js";import{_ as H,R as T,r as m,m as z,o as F,Z as M,$ as x,a as j,N as A,b as n,d as a,g as k,f as O,e,F as h,j as p,y as D,t as o,O as E,h as v,M as Z}from"./index-7859e903.js";const q={key:0,class:"comment-list"},G=["href"],J={class:"comment-item-pic",alt:"userImg"},K={class:"comment-item-title"},P=["href"],Q={class:"comment-item-date"},R={class:"comment-item-disc"},W={class:"comment-item-opt"},X={class:"comment-opt-liked"},Y=["href"],tt={key:1,class:"comment-list"},et={class:"comment-title"},st=["href"],ot={class:"comment-item-pic",alt:"userImg"},nt={class:"comment-item-title"},at=["href"],ct={class:"comment-item-date"},lt={class:"comment-item-disc"},rt={class:"comment-item-opt"},it={class:"comment-opt-liked"},mt=["href"],ut={__name:"Comment",setup(dt){const y=T(),{isLoading:C,hideLoad:N}=B(),g=m([]),r=m([]),u=m(0),I=m(null),f=m(!0),L=m(null);z(r,(s,c)=>{s.length!==c.length&&(f.value=!1)}),F(()=>{b(y.params.id)}),M(s=>{C.value=!0,u.value=0,L.value.scrollTop=0,b(s.params.id)});const b=async s=>{const c=await x(s,u.value);g.value=c.hotComments,r.value=c.comments,I.value=c.total,N()},w=s=>`${Z(s.user.avatarUrl)}?param=50y50`,i=s=>`https://music.163.com/#/user/home?id=${s.user.userId}`,U=s=>s.ipLocation.location!=""?`${s.timeStr}  来自${s.ipLocation.location}`:s.timeStr,S=s=>{if(f.value)return;const{scrollTop:c,scrollHeight:d,offsetHeight:_}=s.target;c+_>=d-100&&(f.value=!0,$())},$=async()=>{u.value++;const s=await x(y.params.id,u.value);r.value=[...r.value,...s.comments]};return(s,c)=>{const d=j("ElectroIcon"),_=A("img-lazy");return n(),a("div",{class:"comment",onScroll:S,ref_key:"list",ref:L},[k(V,{show:O(C)},null,8,["show"]),g.value.length>0?(n(),a("dl",q,[c[0]||(c[0]=e("dt",{class:"comment-title"},"精彩评论",-1)),(n(!0),a(h,null,p(g.value,t=>(n(),a("dd",{key:t.commentId,class:"comment-item"},[e("a",{href:i(t),target:"_blank"},[E(e("img",J,null,512),[[_,w(t)]])],8,G),e("h4",K,[e("a",{href:i(t),target:"_blank"},o(t.user.nickname),9,P)]),e("div",Q,o(U(t)),1),e("p",R,o(t.content),1),e("div",W,[e("div",X,[k(d,{class:"like-icon",type:"like"}),v(" "+o(t.likedCount),1)])]),(n(!0),a(h,null,p(t.beReplied,l=>(n(),a("div",{key:l.user.userId,class:"comment-item-replied"},[e("a",{href:i(l),target:"_blank"},o(l.user.nickname),9,Y),v(" ："+o(l.content),1)]))),128))]))),128))])):D("",!0),r.value.length>0?(n(),a("dl",tt,[e("dt",et,"最新评论（"+o(I.value)+"）",1),(n(!0),a(h,null,p(r.value,t=>(n(),a("dd",{key:t.commentId,class:"comment-item"},[e("a",{href:i(t),target:"_blank"},[E(e("img",ot,null,512),[[_,w(t)]])],8,st),e("h4",nt,[e("a",{href:i(t),target:"_blank"},o(t.user.nickname),9,at)]),e("div",ct,o(U(t)),1),e("p",lt,o(t.content),1),e("div",rt,[e("div",it,[k(d,{class:"like-icon",type:"like"}),v(" "+o(t.likedCount),1)])]),(n(!0),a(h,null,p(t.beReplied,l=>(n(),a("div",{key:l.user.userId,class:"comment-item-replied"},[e("a",{href:i(t),target:"_blank"},o(l.user.nickname),9,mt),v(" ："+o(l.content),1)]))),128))]))),128))])):D("",!0)],544)}}},pt=H(ut,[["__scopeId","data-v-ab10e50d"]]);export{pt as default};
