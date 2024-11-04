import {styled} from "@mui/system";


export const useStyles = () => {

  const PrimaryBackground = styled('div')(({ theme}) => {
    return {
      backgroundColor: theme.palette.primary.main
    }
  })


  return { PrimaryBackground}
}
