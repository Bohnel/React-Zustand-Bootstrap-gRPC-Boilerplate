import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

interface AdministrationProps { }

export const Administration: React.FC<AdministrationProps> = ({ }) => {
  const { t } = useTranslation();

  return (
    <Container style={{ height: "100vh" }}>
    </Container>
  );
};

export default Administration;
