import { store } from 'react-notifications-component';

const notification = {
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeInRight"],
    animationOut: ["animated", "fadeOutRight"],
    dismiss: {
        duration: 5000
    }
}

export const useNotification = (type: string) => {    
    let title = "", message = "";

    type = "success"
    title = "App aggiornata correttamente"
    message = "Stai visualizzando la versione più aggiornata!"

    let notifica = () => {
        store.addNotification({
            title: title,
            message: message,
            type: type,
            ...notification
        });
    }

    return {
        notifica
    }
}