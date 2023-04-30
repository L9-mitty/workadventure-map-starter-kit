/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { time } from "console";

console.log('Script started successfully'); 
const questions = [{"question": "question 1/3", "buttons":
                                                    [{label:"A", className: "primary", callback: winPoint},
                                                    {label:"B", className: "primary", callback: lose}]},
                    {"question": "question 2/3", "buttons":
                                                    [{label:"C", className: "primary", callback: lose},
                                                    {label:"D", className: "primary", callback: winPoint}]},
                    {"question": "question 3/3", "buttons":
                                                    [{label:"E", className: "primary", callback: winPoint},
                                                    {label:"F", className: "primary", callback: lose}]}
                    ]
// timeRemains
let timeR: any = undefined;
// const start_time = new Date();
// const end_time = new Date();

let remaining_time: any = 10 * 60;

let timer_pop:any;// = WA.ui.openPopup("TimeRemains", "10:00 left..",[]);

let question_pop:any ; /*WA.ui.openPopup("questionArea", "reponds a ou b", [{label:"A",
className: "primary",
callback: winPoint},
{label:"B",
className: "primary",
callback: lose}]);*/

let score: number = 0;
let cmpt = 0
let inter: any; 
 
function show_question(cmpt: number) {
    if(cmpt > questions.length - 1) {
        WA.player.state.saveVariable("completed", 1);
        return;
    }
    const question: any = questions[cmpt].question;
    const btn: any = questions[cmpt].buttons;
    question_pop = WA.ui.openPopup("questionArea", question, btn);
}

function winPoint(){
    let temp:any = WA.player.state.loadVariable("score");
    temp += 10;
    WA.player.state.saveVariable("score", temp);
    console.log(WA.player.state.score);
    question_pop.close();
    cmpt++;
    show_question(cmpt);
}

function lose(){
    question_pop.close();
    cmpt++;
    show_question(cmpt);
}

function change_popup() {
    remaining_time--;
    let minutes = Math.floor(remaining_time / 60);
    let seconds = Math.floor(remaining_time - (minutes * 60));
    if((seconds + minutes) > 0 && cmpt < questions.length) {
        timer_pop.close();
        timer_pop = WA.ui.openPopup("TimeRemains",minutes + ':' + seconds + '\nleft..',[]);
    } else if(cmpt > questions.length - 1) {
        timer_pop = WA.ui.openPopup("TimeRemains", "Terminée ! Il restait " + minutes + ':' + seconds,[]);
        clearInterval(inter);
    } else if(!(seconds + minutes)) {
        timer_pop = WA.ui.openPopup("TimeRemains", "Temps écoulé..",[]);
    }
}
// Waiting for the API to be readyS
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)
    let complete:any =WA.player.state.loadVariable("completed");
    console.log(complete + "FRIOZEVJRFEHVO");
    if(remaining_time && (complete==0 || complete == undefined)) {
        timer_pop = WA.ui.openPopup("TimeRemains", "10:00 \nleft..",[]);
        inter = setInterval(change_popup, 1000);
        show_question(cmpt);
    }

    WA.player.state.saveVariable("score", score);
    console.log(WA.player.state.score);
    
}).catch(e => console.error(e));


export {};