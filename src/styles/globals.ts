import { css } from "@emotion/react";

export const page = css`
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: Inter;
`;

export const authorCss = css`
font-size: 14px;
margin: 0;
`;

export const w100 = css`
width: 100%;
`;

export const cont = css`
border-radius: 5px; 
background-color: #D9D9D9;
padding: 14px 18px;
width: 100%;
max-width: 1000px;
margin-bottom: 15px;
`;

export const articleName = css`
font-size: 24px;
font-weight: 600;
margin: 0;
word-wrap: break-word
`;

export const logo = css`
cursor: pointer;
color: black;
font-size: 14px;
font-style: italic;
font-weight: 500;
word-wrap: break-word;
margin: 0;
transition: .3s;
opacity: 1;
&:hover {
    opacity: .7;
    color: #EE1D00;
}
`;
export const jcSb = css`
display: inline-flex;
justify-content: space-between;
align-items: center;
`;
export const contLinkdBottom = css`
border-radius: 0;
border-bottom-left-radius: 5px; 
border-bottom-right-radius: 5px; 
`;
export const btn = css`
color: black;
font-size: 12px;
font-weight: 400;
text-decoration: underline;
word-wrap: break-word;
cursor: pointer;
transition: opacity .3s;
opacity: 1;
margin-right: 10px;
&:hover {
    opacity: .6;
}
&:last-child {
    margin-right: 0px;
}
`;
export const articleSubtitle = css`
font-size: 14px;
font-weight: 400;
word-wrap: break-word;
margin: 0;
`;
export const contentName = css`
max-width: calc(100% - 90px);
`;

export const contEdit = css`
max-width: 1035px;
padding: 0;
`;
export const editor = css`
border-radius: 5px;
`;
export const contLinkdTop = css`
border-radius: 0;
border-top-left-radius: 5px; 
border-top-right-radius: 5px; 
border-bottom: 1px #939393 solid; 
margin-bottom: 0;
`;
export const btnCont = css`
color: black;
font-size: 12px;
font-weight: 400;
text-decoration: underline;
word-wrap: break-word;
cursor: pointer;
transition: opacity .3s;
opacity: 1;
&:hover {
    opacity: .6;
}
`;
