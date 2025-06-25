import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as i,w as d,e as o}from"./index-FgW3rUnC.js";function c({title:n="List",items:s,onClick:t}){return e.jsxs("div",{"data-testid":"ProductList",children:[e.jsx("p",{children:n}),e.jsx("ul",{children:s.map(r=>e.jsx("li",{onClick:()=>t?.(r),children:r.name},r.id))})]})}c.__docgenInfo={description:"",methods:[],displayName:"ProductListView",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'List'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"Product"}],raw:"Product[]"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: Product) => void",signature:{arguments:[{type:{name:"Product"},name:"item"}],return:{name:"void"}}},description:""}}};const m=[{id:"1",name:"Product 1",category:"Electronics"},{id:"2",name:"Product 2",category:"Sport"},{id:"3",name:"Product 3",category:"Electronics"},{id:"4",name:"Product 4",category:"Toys"},{id:"5",name:"Product 5",category:"Sport"},{id:"6",name:"Product 6",category:"Electronics"}],p={title:"Example/ProductList",component:c},a={name:"Default",args:{title:"Test",items:m,onClick:i()},play:async({canvasElement:n})=>{const t=d(n).getByTestId("ProductList");await o(t).toBeInTheDocument(),await o(t.textContent).toBe("Test")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    title: "Test",
    items: data,
    onClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('ProductList');
    await expect(element).toBeInTheDocument();
    await expect(element.textContent).toBe("Test");
  }
}`,...a.parameters?.docs?.source}}};const y=["ProductListStory"];export{a as ProductListStory,y as __namedExportsOrder,p as default};
