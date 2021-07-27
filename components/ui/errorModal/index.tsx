import * as Styled from './styles';
import { Modal } from '../modal';
import { CustomError } from 'types'

interface Props {
  error: CustomError;
  onHandleClose: () => void;
}

export const ErrorModal = ({ error, onHandleClose }: Props) => {
  return (
    <Modal onHandleClose={() => onHandleClose()}>
      <h3>Status Code: {error.status || 400}</h3>
      <h2>{error.message}</h2>
      <Styled.StackContainer>
        <p>
          {error.stack}
        </p>
      </Styled.StackContainer>
    </Modal>
  )
}