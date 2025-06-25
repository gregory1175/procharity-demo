import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{w as r,e as c}from"./index-FgW3rUnC.js";function a({di:e}){const{ProductList:o}=e;return t.jsxs("div",{"data-testid":"CatalogView",children:[t.jsxs("nav",{children:[t.jsx("button",{children:"All"}),t.jsx("button",{children:"Electronics"}),t.jsx("button",{children:"Sport"}),t.jsx("button",{children:"Toys"})]}),t.jsx("main",{children:t.jsx(o,{title:"Electronics",onClick:console.log})})]})}a.__docgenInfo={description:"",methods:[],displayName:"CatalogView",props:{di:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  ProductList: FunctionComponent<ProductListProps>;
}`,signature:{properties:[{key:"ProductList",value:{name:"FunctionComponent",elements:[{name:"ProductListProps"}],raw:"FunctionComponent<ProductListProps>",required:!0}}]}},description:""}}};const d={title:"Example/CatalogView",component:a},n={name:"Default",args:{di:{ProductList:function(){return t.jsx("span",{children:"mock"})}}},play:async({canvasElement:e})=>{const s=r(e).getByTestId("CatalogView");await c(s).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    di: {
      ProductList: function () {
        return <span>mock</span>;
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('CatalogView');
    await expect(element).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const u=["CatalogStory"];export{n as CatalogStory,u as __namedExportsOrder,d as default};
