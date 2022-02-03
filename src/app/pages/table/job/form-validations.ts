import { FormControl } from '@angular/forms';

/*Novas validações para formulário de jobs*/
export default class formValidations {

  static precoValidator(control: FormControl) {
    const preco = control.value;

    if (preco < 0) {
      return { required: true };
    }
    return null;
  }

  static quantidadeValidator(control: FormControl) {
    const quantidade = control.value;

    if (quantidade > 99 || quantidade < 0) {
      return { required: true };
    }
    return null;
  }

  static porcentagemValidator(control: FormControl) {
    const porcentagem = control.value;

    if (porcentagem > 100 || porcentagem < 0) {
      return { required: true };
    }
    return null;
  }
}
