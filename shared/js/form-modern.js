/**
 * FORMULÁRIOS MODERNOS - GRUPO IDEAL SOLUÇÕES
 * Sistema completo de validação, máscaras e interatividade
 */

class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;
    
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.init();
  }

  init() {
    // Adicionar event listeners
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Validação em tempo real
    const inputs = this.form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });

    // Máscaras
    this.applyMasks();
  }

  applyMasks() {
    // Máscara CPF: 000.000.000-00
    const cpfInput = this.form.querySelector('[name="cpf"]');
    if (cpfInput) {
      cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
          value = value.replace(/(\d{3})(\d)/, '$1.$2');
          value = value.replace(/(\d{3})(\d)/, '$1.$2');
          value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
          e.target.value = value;
        }
      });
    }

    // Máscara Telefone: (00) 00000-0000 ou (00) 0000-0000
    const phoneInputs = this.form.querySelectorAll('[name="fone1"], [name="fone2"], [name="telefone1"], [name="telefone2"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
          if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
          } else {
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
          }
          e.target.value = value;
        }
      });
    });

    // Máscara CEP: 00000-000
    const cepInput = this.form.querySelector('[name="cep"]');
    if (cepInput) {
      cepInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 8) {
          value = value.replace(/(\d{5})(\d)/, '$1-$2');
          e.target.value = value;
        }
      });

      // Auto-completar endereço via ViaCEP
      cepInput.addEventListener('blur', () => this.fetchAddressFromCEP(cepInput));
    }
  }

  async fetchAddressFromCEP(cepInput) {
    const cep = cepInput.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        this.showFieldError(cepInput, 'CEP não encontrado');
        return;
      }

      // Preencher campos de endereço
      const enderecoInput = this.form.querySelector('[name="endereco"]');
      const bairroInput = this.form.querySelector('[name="bairro"]');

      if (enderecoInput && data.logradouro) {
        enderecoInput.value = data.logradouro;
      }
      if (bairroInput && data.bairro) {
        bairroInput.value = data.bairro;
      }

      this.clearFieldError(cepInput);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  }

  validateField(input) {
    const value = input.value.trim();
    const name = input.name;
    let error = null;

    // Validações por tipo de campo
    if (input.required && !value) {
      error = 'Este campo é obrigatório';
    } else if (name === 'email' && value) {
      if (!this.isValidEmail(value)) {
        error = 'E-mail inválido';
      }
    } else if (name === 'cpf' && value) {
      if (!this.isValidCPF(value)) {
        error = 'CPF inválido';
      }
    } else if ((name === 'fone1' || name === 'telefone1') && value) {
      const digits = value.replace(/\D/g, '');
      if (digits.length < 10) {
        error = 'Telefone inválido';
      }
    } else if (name === 'cep' && value) {
      const digits = value.replace(/\D/g, '');
      if (digits.length !== 8) {
        error = 'CEP inválido';
      }
    }

    if (error) {
      this.showFieldError(input, error);
      return false;
    } else {
      this.clearFieldError(input);
      return true;
    }
  }

  showFieldError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.add('error');
    formGroup.classList.remove('success');

    // Remover mensagem de erro existente
    const existingError = formGroup.querySelector('.form-error');
    if (existingError) existingError.remove();

    // Adicionar nova mensagem
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
  }

  clearFieldError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.remove('error');
    const errorDiv = formGroup.querySelector('.form-error');
    if (errorDiv) errorDiv.remove();

    // Adicionar classe de sucesso se campo válido
    if (input.value.trim() && this.validateField(input)) {
      formGroup.classList.add('success');
    } else {
      formGroup.classList.remove('success');
    }
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }

  validateForm() {
    let isValid = true;
    const inputs = this.form.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Remover alertas antigos
    this.removeAlerts();

    // Validar formulário
    if (!this.validateForm()) {
      this.showAlert('Por favor, corrija os erros antes de enviar.', 'error');
      return;
    }

    // Mostrar loading
    this.setLoading(true);

    try {
      const formData = new FormData(this.form);
      const action = this.form.action || 'cadastro_clientes.php';

      const response = await fetch(action, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        this.showAlert(result.message || 'Cadastro realizado com sucesso!', 'success');
        setTimeout(() => {
          if (result.redirect) {
            window.location.href = result.redirect;
          } else {
            this.form.reset();
            this.removeAlerts();
          }
        }, 2000);
      } else {
        this.showAlert(result.message || 'Erro ao processar o cadastro. Tente novamente.', 'error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      this.showAlert('Erro ao enviar formulário. Verifique sua conexão e tente novamente.', 'error');
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(loading) {
    if (loading) {
      this.submitButton.disabled = true;
      this.submitButton.classList.add('btn-loading');
      this.form.classList.add('form-loading');
    } else {
      this.submitButton.disabled = false;
      this.submitButton.classList.remove('btn-loading');
      this.form.classList.remove('form-loading');
    }
  }

  showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    
    const icon = type === 'success' ? '✓' : '✕';
    
    alert.innerHTML = `
      <span class="alert-icon">${icon}</span>
      <div class="alert-content">
        <div class="alert-title">${type === 'success' ? 'Sucesso!' : 'Atenção'}</div>
        <div>${message}</div>
      </div>
    `;

    this.form.insertBefore(alert, this.form.firstChild);
    
    // Auto-remover após 5 segundos para erros
    if (type === 'error') {
      setTimeout(() => alert.remove(), 5000);
    }
  }

  removeAlerts() {
    const alerts = this.form.querySelectorAll('.alert');
    alerts.forEach(alert => alert.remove());
  }
}

// Auto-inicializar data atual
document.addEventListener('DOMContentLoaded', () => {
  const dataCadastroInput = document.getElementById('dataCadastro');
  if (dataCadastroInput) {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    dataCadastroInput.value = `${dia}/${mes}/${ano}`;
    dataCadastroInput.readOnly = true;
  }
});

// Exportar para uso global
window.FormValidator = FormValidator;
