import * as Styled from './styles';
import { Modal } from '../modal';
import { CustomError } from 'types'

interface Props {
  error: CustomError;
}

export const ErrorModal = ({ error }: Props) => {
  return (
    <Modal>
      <h3>Status Code: {error.status || 400}</h3>
      <h1>{error.message}</h1>
      <Styled.StackContainer>
        <p>
          {error.stack}
        </p>
      </Styled.StackContainer>
    </Modal>
  )
}