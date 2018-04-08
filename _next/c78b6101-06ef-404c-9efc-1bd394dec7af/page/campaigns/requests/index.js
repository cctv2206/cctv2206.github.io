
          window.__NEXT_REGISTER_PAGE('/campaigns/requests', function() {
            var comp = module.exports=webpackJsonp([6],{858:function(e,t,r){e.exports=r(859)},859:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(43),u=n(l),a=r(84),s=n(a),o=r(46),d=n(o),c=r(21),f=n(c),i=r(4),p=n(i),m=r(5),v=n(m),h=r(6),E=n(h),y=r(7),C=n(y),q=r(0),_=n(q),b=r(52),x=r(76),k=r(97),w=n(k),A=r(115),g=n(A),R=r(861),T=n(R),z=function(e){function t(){return(0,p.default)(this,t),(0,E.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,C.default)(t,e),(0,v.default)(t,[{key:"renderRows",value:function(){var e=this;return this.props.requests.map(function(t,r){return _.default.createElement(T.default,{request:t,id:r,key:"request-"+r,address:e.props.address,approversCount:e.props.approversCount})})}},{key:"render",value:function(){var e=b.Table.Header,t=b.Table.Row,r=b.Table.HeaderCell,n=b.Table.Body;return _.default.createElement(w.default,null,_.default.createElement("h3",null,"Requests List"),_.default.createElement(x.Link,{route:"/campaigns/"+this.props.address+"/requests/new"},_.default.createElement("a",null,_.default.createElement(b.Button,{primary:!0,floated:"right",style:{marginBottom:10}},"Add Request"))),_.default.createElement(b.Table,{textAlign:"center"},_.default.createElement(e,null,_.default.createElement(t,null,_.default.createElement(r,null,"ID"),_.default.createElement(r,null,"Description"),_.default.createElement(r,null,"Amount (ether)"),_.default.createElement(r,null,"Recipient"),_.default.createElement(r,null,"Approval Count"),_.default.createElement(r,null,"Approve"),_.default.createElement(r,null,"Finalize"))),_.default.createElement(n,null,this.renderRows())),_.default.createElement("div",null,"Found ",this.props.requestCount," requests."))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(u.default.mark(function e(t){var r,n,l,a,o;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.address,n=(0,g.default)(r),e.next=4,n.methods.getRequestsCount().call();case 4:return l=e.sent,e.next=7,n.methods.approversCount().call();case 7:return a=e.sent,e.next=10,s.default.all(Array(parseInt(l,10)).fill().map(function(e,t){return n.methods.requests(t).call()}));case 10:return o=e.sent,e.abrupt("return",{address:r,requests:o,requestCount:l,approversCount:a});case 12:case"end":return e.stop()}},e,this)}));return e}()}]),t}(q.Component);t.default=z},861:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(43),u=n(l),a=r(46),s=n(a),o=r(21),d=n(o),c=r(4),f=n(c),i=r(5),p=n(i),m=r(6),v=n(m),h=r(7),E=n(h),y=r(0),C=n(y),q=r(62),_=n(q),b=r(115),x=n(b),k=r(52),w=function(e){function t(){var e,r,n,l,a=this;(0,f.default)(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=n=(0,v.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(c))),n.onApprove=function(){var e=(0,s.default)(u.default.mark(function e(t){var r,l;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,x.default)(n.props.address),e.next=3,_.default.eth.getAccounts();case 3:return l=e.sent,e.next=6,r.methods.approveRequest(n.props.id).send({from:l[0]});case 6:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),n.onFinalize=function(){var e=(0,s.default)(u.default.mark(function e(t){var r,l;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,x.default)(n.props.address),e.next=3,_.default.eth.getAccounts();case 3:return l=e.sent,e.next=6,r.methods.finalizeRequest(n.props.id).send({from:l[0]});case 6:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),l=r,(0,v.default)(n,l)}return(0,E.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=k.Table.Row,t=k.Table.Cell,r=this.props.request,n=r.description,l=r.value,u=r.approvalCount,a=r.recipient,s=r.complete,o=u>this.props.approversCount/2;return C.default.createElement(e,{disabled:s,positive:o&&!s},C.default.createElement(t,null,"#"+(this.props.id+1)),C.default.createElement(t,null,n),C.default.createElement(t,null,_.default.utils.fromWei(l,"ether")),C.default.createElement(t,null,a),C.default.createElement(t,null,u+"/"+this.props.approversCount),C.default.createElement(t,null,s?null:C.default.createElement(k.Button,{color:"green",basic:!0,onClick:this.onApprove},"Approve")),C.default.createElement(t,null,s?null:C.default.createElement(k.Button,{color:"teal",basic:!0,onClick:this.onFinalize},"Finalize")))}}]),t}(y.Component);t.default=w}},[858]);
            return { page: comp.default }
          })
        