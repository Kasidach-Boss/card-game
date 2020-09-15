import React from 'react';

export default function Showmessage (){
    window.dynaform.flashMessage( {
        duration : 8000,
        emphasisMessage: "ProcessMaker Flash Message Example",
        message:"Hello user, welcome to ProcessMaker Web Version.",
        type : 'success',
        appendTo:$('#checkgroupVar')
     } )
     return(
         <Showmessage =
     );
}