(self.webpackChunk=self.webpackChunk||[]).push([[5891],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9516:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>o,toc:()=>s,default:()=>c});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),l={},o={type:"mdx",permalink:"/docs/plugins/databases/setup",source:"@site/src/embedded-pages/docs/plugins/databases/setup.mdx"},s=[{value:"Android",id:"android",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use the databases plugin, you need to add the plugin to your Flipper client instance. The plugin is currently only available for Android."),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("p",null,"Instantiate and add the plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"FlipperClient"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;\n\nclient.addPlugin(new DatabasesFlipperPlugin(context));\n")),(0,i.kt)("p",null,"By default it will list all sqlite databases returned by the context. If you are storing a sqlite database somewhere else, you can specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'client.addPlugin(new DatabasesFlipperPlugin(new SqliteDatabaseDriver(context, new SqliteDatabaseProvider() {\n    @Override\n    public List<File> getDatabaseFiles() {\n        List<File> databaseFiles = new ArrayList<>();\n        for (String databaseName : context.databaseList()) {\n            databaseFiles.add(context.getDatabasePath(databaseName));\n        }\n        databaseFiles.add("...path_to_your_db...")\n        return databaseFiles;\n    }\n})));\n')),(0,i.kt)("p",null,"If you use a different type of database other than sqlite, you can implement a driver to be able to access it via Flipper. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"client.addPlugin(new DatabasesFlipperPlugin(new DatabaseDriver(context) {\n    @Override\n    public List getDatabases() {\n        return null;\n    }\n\n    @Override\n    public List<String> getTableNames(DatabaseDescriptor databaseDescriptor) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableDataResponse getTableData(DatabaseDescriptor databaseDescriptor, String table, String order, boolean reverse, int start, int count) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableStructureResponse getTableStructure(DatabaseDescriptor databaseDescriptor, String table) {\n        return null;\n    }\n\n    @Override\n    public DatabaseExecuteSqlResponse executeSQL(DatabaseDescriptor databaseDescriptor, String query) {\n        return null;\n    }\n    }));\n")))}c.isMDXComponent=!0}}]);