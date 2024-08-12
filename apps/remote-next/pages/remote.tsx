import Head from "next/head";
import { useAtomTest } from "@repo/hook"
import { TestingComponent } from "@repo/testing"
const RemotePage = () => {
  const {
    atomTest,
    setAtomTest,
  } = useAtomTest();
  
  return(
  <div>
    <Head>
      <title>Remote Page</title>
    </Head>

    <div className="hero">
      <h1>Remote Page</h1>
    </div>

    <div>{atomTest}</div>
    <button onClick={()=>{setAtomTest((prev:number)=>prev+1)}}>click</button>

    <TestingComponent/>
  </div>
);}

export default RemotePage;
