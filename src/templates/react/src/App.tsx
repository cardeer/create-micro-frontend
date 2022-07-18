import React from 'react'

const App = () => {
  return (
    <>
      <div className="container">
        <img className="webpack-image" src="/favicon.svg" />
        <div className="title">Micro front-end with React.js + Webpack 5</div>
      </div>

      <style scoped>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          color: white;
          background-color: #202020;
        }

        .webpack-image {
          width: 250px;
          aspect-ratio: 1;
          animation: spin 5s linear infinite;
        }

        .title {
          margin-top: 80px;
          font-size: 30px;
        }

        @keyframes spin {
          from {
            transform: rotateZ(0deg);
          }

          to {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default App
