export default function trataErro(err){
    if (err.code === 'ENOENT'){
        throw new Error('Arquivo não encontrado');
    }else {
        return 'Erro na aplicatição'
    }
}