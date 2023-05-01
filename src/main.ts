/// <reference types="@workadventure/iframe-api-typings" />
/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully'); 
let currentPopup: any = undefined;
let infoPopup: any = undefined;
let infoPopupC: any = undefined;
let infoPopupCours: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        console.log('JGREGFORSVOHFEHOVHOFDEGHFHEODHFHG');
        console.error(import.meta.url)
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter('info').subscribe(() => {
        infoPopup = WA.ui.openPopup("infoPop", "Prochaine réunion d'info :\nMardi 16 mai à 9h30 : formation Web Appli\nJeudi 18 mai à 11h30 : formation Data", []);
    })

    WA.room.area.onLeave('info').subscribe(closePopupi)

    WA.room.area.onEnter('infoChal').subscribe(() => {
        infoPopupC = WA.ui.openPopup("infoPopChal", "Challenge du jour :\nCommence à 9h00\nThématique du jour :\nSQL", []);
    })

    WA.room.area.onLeave('infoChal').subscribe(closePopupic)

    WA.room.area.onEnter('infoCours').subscribe(() => {
        infoPopupCours = WA.ui.openPopup("infoPopCours", "Salles de cours et d'entraide", []);
    })

    WA.room.area.onLeave('infoCours').subscribe(closePopupicours)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e=> console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
function closePopupi(){
    if (infoPopup !== undefined) {
        infoPopup.close();
        infoPopup = undefined;
    }
}
function closePopupic(){
    if (infoPopupC !== undefined) {
        infoPopupC.close();
        infoPopupC = undefined;
    }
}
function closePopupicours(){
    if (infoPopupCours !== undefined) {
        infoPopupCours.close();
        infoPopupCours = undefined;
    }
}

export {};
