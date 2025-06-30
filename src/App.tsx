import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getWsProvider } from "polkadot-api/ws-provider/web";
import { createClient, type PolkadotClient } from "polkadot-api";

function App() {
  const endpoint='wss://rpc.polkadot.io';
  function makeClient(endpoint: string): PolkadotClient {
    console.log(`Connecting to endpoint: ${endpoint}`);
    const provider = getWsProvider(endpoint);
    const client = createClient(provider);
    return client;
  }
  async function main() {
    const polkadotClient = makeClient("wss://rpc.polkadot.io");
    console.log({ polkadotClient });
  const chainSpec= await polkadotClient.getChainSpecData();
   
    const finalizedBlock=await polkadotClient.getFinalizedBlock();
    console.log(`Done!`,chainSpec,finalizedBlock);
    console.log(
      `Connected to ${chainSpec.name} at block ${finalizedBlock.number}.\n`,
    );
  }
  useEffect(()=>{
main();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
