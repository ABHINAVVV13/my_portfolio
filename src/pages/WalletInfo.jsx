import React, { useState } from 'react';
import backImg from '../assets/images/back-img3.webp';

const WalletInfo = () => {
  const [inputWalletAddress, setInputWalletAddress] = useState('');
  const [tokens, setTokens] = useState([]);

  const fetchTokenDetails = async (walletAddress) => {
    const myHeaders = new Headers();
    myHeaders.append("x-api-key", "Pqr3EfcEaa1NVmR_"); // Replace with your actual API key

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const url = `https://api.shyft.to/sol/v1/wallet/all_tokens?network=mainnet-beta&wallet=${walletAddress}`;

    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setTokens(data.result); // Assuming the API response structure matches your example
      } else {
        console.error('Failed to fetch token details');
        setTokens([]);
      }
    } catch (error) {
      console.error('Error fetching token details:', error);
      setTokens([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputWalletAddress) {
      fetchTokenDetails(inputWalletAddress);
    }
  };

  return (
    <div style={styles.container}>
  <form onSubmit={handleSubmit} style={styles.form}>
    <h3 className='mt-5 flex flex-col gap-3 text-slate-600'> <b>Enter solona wallet address:</b></h3>
    <p  className='text-black-500/50 font-normal pl-1 text-sm' style={{ marginTop:'10px'}}> Example: 7H3EbqRpEBpMBePdeQMpDaincNn6dqETuCok7UsBdRpG </p>
    <input
      type="text"
      value={inputWalletAddress}
      onChange={(e) => setInputWalletAddress(e.target.value)}
      placeholder="Enter wallet address"
      style={styles.input}
    />
    <button type="submit" style={styles.button}>Submit</button>
  </form>
  <h2 style={styles.title}>Token Information</h2>
  <div style={styles.tokenList}>
        {tokens.map((token, index) => (
          <div key={index} style={styles.tokenCard}>
          <img src={token.info.image} alt={token.info.name} style={styles.tokenImage} />
          <p><strong>Name:</strong> {token.info.name}</p>
          <p style={styles.tokenAddress}><strong>Address:</strong> {token.address}</p>
          <p><strong>Balance:</strong> {token.balance / Math.pow(10, token.info.decimals)}</p>
        </div>
        ))}
      </div>
</div>

  );
};

const styles = {
    container: {
        fontFamily: "'Roboto', sans-serif",
        background: `url(${backImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        paddingTop: '40px',
        paddingBottom: '40px',
        overflow: 'auto',
        width: '100vw',
        minHeight: '100vh',
      },
      
      form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: '80px',
        padding: '20px',
        borderRadius: '5px',
        background: 'rgba(255, 255, 255, 0.5)', 
        marginBottom: '40px',
      },
      
      input: {
        margin: '10px 0', // Added margin for spacing
        padding: '12px 20px',
        width: '100%', // Adjust width to fill the form
        maxWidth: '500px', // Ensures the input is not too wide
        borderRadius: '5px',
        border: '1px solid #BEC5C9',
        background: '#FFFFFF',
        color: '#333',
        fontSize: '16px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      
      button: {
        width: '100%', // Adjust width to fill the form
        maxWidth: '500px', // Aligns with the input field's max width
        padding: '12px 20px',
        marginTop: '10px', // Added top margin for spacing
        borderRadius: '5px',
        border: 'none',
        background: 'linear-gradient(45deg, #007bff, #00dbff)',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(45deg, #009bff, #00ffff)',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        },
      },
      
      exampleAddress: {
        margin: '20px 0',
        color: '#333',
        fontSize: '14px',
        textAlign: 'center',
        maxWidth: '500px', // Ensures the text aligns well with the input and button
        padding: '10px',
        borderRadius: '5px',
        background: '#f0f0f0', // A light background to make the example address stand out
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      
    title: {
      color: '#333',
      fontSize: '24px',
      fontWeight: 'bold',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    tokenList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      width: '100%', // Ensure the token list spans the full width of its container
    },
    tokenCard: {
        padding: '20px',
        borderRadius: '10px',
        background: '#FFFFFF',
        color: '#333',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        width: 'calc(50% - 20px)', // Responsive design for cards
        maxWidth: '300px', // Max width to ensure cards are not too wide on larger screens
        textAlign: 'center',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        },
    },
    tokenAddress: {
        wordBreak: 'break-all', 
        margin: '10px 0', 
    },
      
      
    tokenImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      margin: '0 auto 20px',
      border: '2px solid #00dbff',
    },
  };
  
  

export default WalletInfo;
