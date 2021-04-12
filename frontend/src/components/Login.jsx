import React, {useState} from "react";
import '../App.css';
import axios from "axios";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io');
const contractAddress = "KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn";
let userAddress, userBalance, contractInstance;

const initWallet = async () => {
  try {
    Tezos.setProvider({ rpc: `https://carthagenet.SmartPy.io` });
    const options = {
      name: "Brandnetic",
      eventHandlers: {
        PERMISSION_REQUEST_SUCCESS: {
          handler: async data => {
            console.log("connected");
          },
       },
      OPERATION_REQUEST_SENT: {
        handler: async data => {
          console.log("request sent");
        },
      },
      OPERATION_REQUEST_SUCCESS: {
        handler: async data => {
          console.log("request successful");
        },
      },
      OPERATION_REQUEST_ERROR: {
        handler: async data => {
          console.log("request error");
        },
      },
    },
  };
  const wallet = new BeaconWallet(options);
  const network = {
    type: "carthagenet",
  };
  await wallet.requestPermissions({ network });
  Tezos.setWalletProvider(wallet);
  userAddress = wallet.permissions.address;
  userBalance = await Tezos.tz.getBalance(userAddress);
  console.log("Address: " + userAddress)
  console.log("Balance: " + userBalance)
  contractInstance = await Tezos.wallet.at(contractAddress);
} catch (error) {
  console.log(error);
}
};

window.onload = () => {
  document.getElementById("init-wallet").onclick = initWallet;
  };

function Login() {
    const [input, setInput] = useState({
        email: '',
        username: '',
        password: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClickTemp(event) {
      event.preventDefault();
      window.alert('This function is coming soon!')
    }

    function handleClick(event) {
        event.preventDefault();
        
        if (input.email == '' || input.username == '' || input.password == '') {
          window.alert('Please fill out all required fields')
          return
        }
        const newUser = {
            email: input.email,
            username: input.username,
            password: input.password
        }
        window.alert('User sucessfully registered!')

        axios.post('http://localhost:3001/login', newUser)
        
    }
    return <div>
        <div class = "homepage">
  <form method = "post" action = "/">
    <div class = "newuser">
      <div class = "timelineText">Create New Account</div><br></br>
      <div class="contractText">
        Email
        <div className = 'form-group'>
        <input onChange = {handleChange} name = "email" value = {input.email} autoComplete = "off" class="input input2" placeholder = "Email" type="text"></input> <br></br>
        </div>
        Username
        <div className = 'form-group'>
        <input onChange = {handleChange} name = "username" value = {input.username} autoComplete = "off" class="input input2" placeholder = "Username" type="text"></input> <br></br>
        </div>
        Password
        <div className = 'form-group'>
        <input onChange = {handleChange} name = "password" value = {input.password} autoComplete = "off" class="input input2" placeholder = "Password" type="password"></input> <br></br>
        </div>
        <button type = "reset" onClick = {handleClick} class="button button3">Create</button>
        <div id="connection">
          <button class="connect-button" id="init-wallet">
           Connect your wallet
         </button>
      </div>
      </div>
    </div>
    </form>
    
    <div class ="login">
      <div class = "timelineText">Login</div><br></br>
      <div class="contractText">
        Email
        <div className = 'form-group'>
        <input class="input input2" type="text" placeholder = "Email"></input> <br></br>
        </div>
        Username
        <div className = 'form-group'>
        <input class="input input2" type="text" placeholder = "Username"></input> <br></br>
        </div>
        Password
        <div className = 'form-group'>
        <input class="input input2" type="password" placeholder = "Password"></input> <br></br>
        </div>
        <button class="button button3" onClick = {handleClickTemp}>Login</button>
      </div>
    </div>
  </div>
    </div>
}

export default Login;