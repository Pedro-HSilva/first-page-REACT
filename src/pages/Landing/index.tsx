import { Box, Grid } from "@mui/material";
import Card from "../../components/Card";
import CardImage from "../../components/CardImage";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Landing() {
  return (
    <>
      <Box
        sx={{
          height: "400px",
          backgroundColor: "#fdbfbf",
          paddingTop: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "verdana",
        }}
      >
        <h1>Minha página aleatória com React</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "90px",
          paddingBottom: "20px",
          backgroundColor: "#fbfbfb",
        }}
      >
        <DesktopWindowsIcon sx={{ fontSize: "100px" }} />
        <FlutterDashIcon sx={{ fontSize: "100px" }} />
        <TaskAltIcon sx={{ fontSize: "100px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#fbfbfb",
        }}
      >
        <h4>Somente para Desktop</h4>
        <h4>Criado com componentes</h4>
        <h4>Fácil aproveitamento</h4>
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <Card titulo="Inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntSur!
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://besthqwallpapers.com/Uploads/8-10-2018/68362/thumb2-internacional-4k-logo-creative-art-red-white-checkered-flag.jpg"
              imageAlt="logoInter"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://conteudo.imguol.com.br/c/esporte/71/2022/06/21/vitao-zagueiro-do-inter-deve-permanecer-no-clube-com-prorrogacao-de-emprestimo-1655841602130_v2_4x3.jpg"
              imageAlt="jogadorVitão"
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Card titulo="Novo Contratado">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntur!
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Card titulo="Próximo adversário:">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequuntur ea voluptates amet veritatis tempora cumque, aliquid
            suscipit hic molestiae tenetur reprehenderit voluptatem neque non
            similique pariatur nemo a architecto eos. Reiciendis asperiores
            necessitatibus eveniet, dicta labore ipsam architecto.
            Exercitationem ducimus animi unde rem reiciendis odit delectus
            vitae, inventore consequuntSur!
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardImage
              imageSrc="https://besthqwallpapers.com/Uploads/14-5-2018/52561/thumb2-colo-colo-fc-club-social-y-deportivo-colo-colo-4k-chilean-football-club-silk-texture.jpg"
              imageAlt="bandeiraColoColo"
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "200px",
          backgroundColor: "#fdbfbf",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "verdana",
        }}
      >
        <h1>Contato</h1>
      </Box>
      <Grid
        container
        sx={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "verdana",
          backgroundColor: "#fbfbfb",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a href="">About</a> <a href="">Contact</a>{" "}
          <a href="">Terms of Use</a> <a href="">PrivacyPolicy</a>
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FacebookIcon sx={{ fontSize: "50px" }} />
          <TwitterIcon sx={{ fontSize: "50px" }} />
          <InstagramIcon sx={{ fontSize: "50px" }} />
        </Grid>
      </Grid>
    </>
  );
}

export default Landing;
