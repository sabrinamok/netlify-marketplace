import React from "react";
import ReactDom from "react-dom";
import App from "./pages/_app";
import * as serviceWorker from "./serviceWorker";
import {
    Mainnet,
    DAppProvider,
    useEthers,
    Config,
  } from '@usedapp/core'
import cms from 'netlify-cms-app'
import { createWidget } from '@ncwidgets/reorder'
import { Widget as ReorderWidget } from '@ncwidgets/reorder'

const ListComponent = ({ item }) => (
  <>
    <strong>{item.title}</strong>
    <p style={{ margin: 0, color: '#798291', fontSize: '0.8rem' }}>{item.id}</p>
  </>
)

const CustomReorderPreview = ({ items }) => (
  <section>
    <hr />
    <p>Custom Widget Preview</p>
    {items.map((item, i) => <p key={i}>{item.title}</p>)}
  </section>
)

const customReorderWidget = createWidget({
  renderControl: ({ value }) => <ListComponent item={value} />,
  renderPreview: ({ value }) => <CustomReorderPreview items={value}/>,
})

cms.registerWidget({
  name: 'custom-reorder',
  ...customReorderWidget,
})

cms.init()
  
  const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: 'https://mainnet.infura.io/v3/57fc2c19095745e59ab96a4aa87dada8',
    },
  }
  
cms.registerWidget(ReorderWidget)
cms.init()

ReactDom.render(
<DAppProvider config={config}><App /></DAppProvider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
