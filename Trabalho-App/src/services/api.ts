const API_URL = 'https//api-ocorrencia.muapps.com.br';
export const SLUG_ALUNO = 'Matheus';

export type criarOcorrenciaPayload = {
    titulo: string;
    descricao: string;
    local: string;
    slug: string;
};

export async function listarOcorrenciasPorSlug(slug : string){
    const resposta = await fetch(`${API_URL})/ocorrencias?slug=${slug}`);

    if(!resposta.ok){
        throw new Error('Erro ao buscar ocorrencias');
    }

    return await resposta.json();

}
export async function criarOcorrencia(dados: criarOcorrenciaPayload){
    const resposta = await fetch ('${API_URL}/ocorrencias', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dados), 
    });
    if(!resposta.ok){
        throw new Error('Erro ao buscar ocorrencias');    
    }
    return await resposta.json();
}
