import { GlobalStylesProps } from '~/app/styles/global-styles.props.ts';
import './styles.scss';

const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
    return children;
};

export default GlobalStyles;
