import { makeStyles } from "tss-react/mui";
import style from '../../assets/styles/_variable.module.scss';

export const useSignUpFormStye = makeStyles()(() => ({
    signUpFormGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: style.white,
        padding: '1rem 2rem 2rem',
        borderRadius: '1rem',
        // boxShadow: style.generalBorderShadow,
    }
}))