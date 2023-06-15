import { Alert, AlertTitle } from '@mui/material'


export default function Alerts(props) {
  return (
    <div>
        {props.notifyCat&&<Alert variant='filled' onClick={()=>props.handleNotifyCat()}><AlertTitle>Category filter successfully selected</AlertTitle></Alert>}
        {props.notifyDie&&<Alert variant='filled' onClick={()=>props.handleNotifyDie()}><AlertTitle>Dietary filter successfully selected</AlertTitle></Alert>}
        {props.noFilter&&<Alert variant='filled' onClick={()=>props.handleNoFilter()}><AlertTitle>All filters successfully removed</AlertTitle></Alert>}
    </div>
  )
}
