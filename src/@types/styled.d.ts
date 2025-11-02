import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    color: {
      GREEN_700: string;
      GREEN_500: string;
      RED_700: string;
      RED_500: string;
      GRAY_700: string;
      GRAY_600: string;
      GRAY_500: string;
      GRAY_400: string;
      GRAY_300: string;
      GRAY_200: string;
      GRAY_100: string;
      WHITE: string;
    };
    font: {
      ROBOTO_REGULAR: string;
      ROBOTO_BOLD: string;
    };
    size: {
      SM: string;
      NM: string;
      MD: string;
      LG: string;
    };
  }
}
