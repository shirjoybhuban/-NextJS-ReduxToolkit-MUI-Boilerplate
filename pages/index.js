import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { ExAfTextField } from 'components/utils/ExAfTextField';
import { AccountCircle } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>[Hello Team]</p>
        <Button variant="contained" size="small" sx={{ ml: 2, mb: 4 }}>
          Next Step
        </Button>
      </section>

      <FormControl
        variant="standard"
        sx={{ ml: 2, mb: 4, width: '600px', maxWidth: '100%' }}>
        <InputLabel shrink htmlFor="binput">
          Academic Qualification Obtained
        </InputLabel>
        <ExAfTextField
          fullWidth
          defaultValue="Academic Qualification"
          id="binput"
        />
      </FormControl>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque vero
          exercitationem facere dolor eum quo blanditiis autem, saepe totam
          ipsum odit nemo, consequuntur perspiciatis veniam voluptas similique
          dolorum ex.
        </Typography>
        <Link href="/reduxServersideprop">
          <a>go to Redux</a>
        </Link>
      </section>
    </>
  );
}
