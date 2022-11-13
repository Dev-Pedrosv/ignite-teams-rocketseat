import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/group-create";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNew() {
    await groupCreate(group);
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Cire a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
