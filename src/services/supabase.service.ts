import { supabaseApi } from '@/api/supabase.api'
import { type Comments } from '@/types/comments.type'

export const createComments = async ({ comment }: { comment: Comments }): Promise<Comments | never> => {
    try {
        const respose = await supabaseApi.post('/comments', comment, {
            headers: {
                "Prefer": "return-representation"
            }
        });
        return respose.data;
    } catch (error) {
        console.log('An error has arisen: ' + error);
        throw new Error('An error has arisen: ' + error);
    }

}

export const getComments = async (): Promise<Comments[] | never> => {
    try {

        const response = await supabaseApi.get('/comments', {
            headers: {
                "Prefer": "return-representation"
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
        throw new Error('An error has arisen: ' + error);
    }
}


export const getCommentsID = async ({id}: {id: number| string}): Promise<Comments[] | never> => {
    try {

        const response = await supabaseApi.get('/comments?id=eq'+id, {
            headers: {
                "Prefer": "return-representation"
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
        throw new Error('An error has arisen: ' + error);
    }
}

export  const editComment = async ({id, comment}: {id: number | undefined, comment:Partial<Comments>}): Promise<void | never> => {
    try {
        
        const response = await supabaseApi.patch('/comments?id=eq.'+id, comment, {
            headers: {
            "Prefer": "return-representation"
            }
        })

        return response.data;

    } catch (error) {
        throw new Error('An error has arisen'+error);
    }
}

export const deleteComment = async ({id}:{id:string | number}):Promise<void | never> => {
    try {
        const response = await supabaseApi.delete('/comments?id=eq.'+id, {
            headers: {
                "Prefer": "return-representation"
            }
        })
    } catch (error) {
        throw new Error('An error has arisen'+error);
    }
}