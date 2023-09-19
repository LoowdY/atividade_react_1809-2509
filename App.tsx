/*Aluno: João Renan Santanna Lopes CC4/2TA - laboratório de programação mobile - CC4/2TA 
Professor: Fábio araújo
Aplicativo de filme

OBS: verificar possibilidade de adicionar imagem ao aplicativo.
OBS2: Tentou-se utilizar o 'useState();' para salvar estados (valores) das variáveis
Prazo mínimo e máximo da atividade: 18/09/23 ----> 25/09/2023

*/
//fazendo imports necessários
import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, View, FlatList } from 'react-native';

// Dados iniciais (simulando a leitura de um arquivo JSON)
const filmesIniciais = [
  { "id": 1, "titulo": "Homem Aranha - Tom Holland", "genero": "Ficção Científica/filme infatil", "avaliacao": "0 - Concordo com a nota péssima. O filem não tem qualidade" },
  { "id": 2, "titulo": "O Cavaleiro das Trevas", "genero/ação/aventura": "Ação", "avaliacao": "9.0" }
];

// Criando tipo de dado em Typescript ('JSON')
interface Filme {
  id: number;
  titulo: string;
  genero: string;
  avaliacao: string;
}


//local onde o aplcativo é executado
const App = () => {
  const [filmes, setFilmes] = useState<Filme[]>(filmesIniciais);
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
//funcao para adicionar filme com os dados no formato definido anteiormente (Variável 'Filme')
  const adicionarFilme = () => {
    const novoFilme = {
      id: Date.now(),
      titulo,
      genero,
      avaliacao
    };
    setFilmes((filmesAnteriores) => [...filmesAnteriores, novoFilme]);
    setTitulo('');
    setGenero('');
    setAvaliacao('');
  };
//funçãao de remoção de filme (botão ainda não definido)
  const removerFilme = (id: number) => {
    setFilmes((filmesAnteriores) => filmesAnteriores.filter(filme => filme.id !== id));
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      
      <TextInput placeholder="Título do filme" value={titulo} onChangeText={setTitulo} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />
      <TextInput placeholder="Gênero" value={genero} onChangeText={setGenero} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />
      <TextInput placeholder="Avaliação e/ou comentário ao filme" value={avaliacao} onChangeText={setAvaliacao} style={{ borderWidth: 1, padding: 5, marginBottom: 10 }} />
      <Button title="Adicionar Filme" onPress={adicionarFilme} />

      <FlatList 
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>Título: {item.titulo}</Text>
            <Text>Gênero: {item.genero}</Text>
            <Text>Avaliação: {item.avaliacao}</Text>



            {/*área em que o botão é definido*/ }
            <Button title="Excluir" onPress={() => removerFilme(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};
//exportando função onde o aplicativo Roda (componente)
export default App;

// App desenvolvido para a matéria de Laboratório de Programação Mobile - Professor Fábio Araújo.
