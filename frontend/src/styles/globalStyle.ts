import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body, html {
 height: 100%;
 font-family: "Inter", sans-serif;
}
.App {
  display: flex;
  align-items: center;
}
.warning {
  color: red;
  font-size: 14px;
}
.get-out {
  cursor: pointer;
}
.get-out:hover {
  color: var(--primary-color)
}
ul, li, a {
  color: currentColor;
}
.bold {
  font-weight: bold;
}
.hover-click-green:hover {
  color: #008000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.hover-click-yellow:hover {
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.not-to-click {
  pointer-events: none;
  cursor: not-allowed;
}
li {
    list-style: none;
  }
    button{
        cursor: pointer;
        :hover {
        filter: brightness(75%);
        transition: 0.3s;
        }
        :active {
        filter: brightness(1.6);
        transition: 0.3s;
    }
    }
  :root {
    --primary-color: #EC6724;
    --pretty-black: #131313
    --white-color: #fff;
    --light-gray-color: #f7f7f7;
    --gray-color: #c5c5c5;
    --background-gray-home-color: #F5F5F5
    --gray-color-2: #999c9f; 
  }
`
export default GlobalStyle