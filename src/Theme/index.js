

const Theme = {
    colors:{
        primary: '#61AB33',
        second: '#62ff00ff'
    },
    fontsSize:{
        titles: "Clamp(50px, 5vw, 6vw)",
        subTitles: "Clamp(15px, 3vw, 4vw)"
    },
    buttons:`
        button{
                display:block;
                max-width:200px;
                width:80%;
                height: 40px;
                border-radius: 10px;
                cursor: pointer;
                background-color: black;
                color: #61AB33;
                transition: .5s;
                margin:0 auto;
            }
        button:hover{
            color: #62ff00ff;
            transform: scale(1.05,1.05);
        }
    `
}

export default Theme