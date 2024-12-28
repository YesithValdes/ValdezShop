import { notFound } from "next/navigation";

interface Props{
    params: {
        id: string;
    };
}

export  default function({ params }: Props){

    //a mi no me deja entrar, asi que lo del notfound ya esta hecho se podria decir
    const { id } = params;
    
    if( id == 'kids'){
        notFound();
    }

    return(

        <div>
            <h1>Category Page {id} </h1>
        </div>
    );
}