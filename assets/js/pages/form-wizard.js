var FormWizard = function() {

    var commonValidationSettings = {
        errorClass: 'help-block animated bounceInRight', // You can change the animation class for a different entrance animation - check https://daneden.github.io/animate.css/
        errorElement: 'div',
        errorPlacement: function(error, e) {
            e.parents('.form-group').append(error);
        },
        highlight: function(e) {
            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function(e) {
            // You can use the following if you would like to highlight with green color the input after successful validation!
            e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
            e.closest('.help-block').remove();
        }
    };

    // You can define rules here for each step 
    var wizard2ValidationSettings = function() {
        return [{
            step: 1,
            errorTextStep: 'Please correct the errors in step 1 and click next',
            validationFields: [{
                id: '#wizard-2-first-name',
                rules: {
                    required: true,
                    messages: {
                        required: 'This is custom error message.'
                    }
                }
            }, {
                id: '#wizard-2-last-name',
                rules: {
                    required: true
                }
            }, {
                id: '#wizard-2-email',
                rules: {
                    required: true,
                    email: true
                }
            }, {
                id: '#wizard-2-password',
                rules: {
                    required: true
                }
            }]
        }, {
            step: 2,
            errorTextStep: 'Please correct the errors in step 2 and click next',
            validationFields: [{
                id: '#wizard-2-country',
                rules: {
                    required: true,
                    messages: {
                        required: 'Select country'
                    }
                }
            }, {
                id: '#wizard-2-state',
                rules: {
                    required: true
                }
            }]
        }, {
            step: 3,
            errorTextStep: 'Please correct the errors in step 3 and click next',
            validationFields: [{
                id: '#wizard-2-salutation',
                rules: {
                    required: true,
                    messages: {
                        required: 'Select salutation'
                    }
                }
            }, {
                id: '#wizard-2-gender',
                rules: {
                    required: true
                }
            }, {
                id: '#wizard-2-terms',
                rules: {
                    required: true,
                    messages: {
                        required: 'You must agree'
                    }
                }
            }]
        }];
    };


    function ValidationWizardService(wizardId, validationSettings) {
        var _self = this;
        _self.wizardId = wizardId;
        _self.validationSettings = validationSettings || {};
        _self.validator = $(this.wizardId).validate(commonValidationSettings);
        _self.leaveAStepCallback = function(step) {
            _self.aggregateWizardInfo(wizardId, '#wizard-2-aggregate-info');
            return _self.validateSteps(parseInt(step.attr('rel')));
        };
    }

    ValidationWizardService.prototype = {
        onFinishCallback: function(step) {
            console.log('Finish... You can submit the form here');
        },
        validateSteps: function(step) {
            var _self = this,
                _wizardId = _self.wizardId,
                _validator = _self.validator,
                _settings = _self.validationSettings(),
                _currentStep = $.grep(_settings, function(el) {
                    return el.step === step;
                }),
                _validCollection,
                _isValid;

            if (!_currentStep.length) return true;

            _validCollection = $.map(_currentStep[0].validationFields, function(obj) {
                $(obj.id).rules('add', obj.rules);
                return _validator.element(obj.id) ? true : false;
            });

            for (var i in _validCollection) {
                if (_validCollection[i] === false) {
                    _isValid = false;
                    break;
                } else {
                    _isValid = true;
                }
            }

            if (_isValid === false) {
                $(_wizardId).smartWizard('showMessage', _currentStep[0].errorTextStep);
                $(_wizardId).smartWizard('setError', {
                    stepnum: _currentStep[0].step,
                    iserror: true
                });
            } else {
                $(_wizardId).smartWizard('hideMessage');
                $(_wizardId).smartWizard('setError', {
                    stepnum: _currentStep[0].step,
                    iserror: false
                });
            }
            return _isValid;
        },
        aggregateWizardInfo: function(form, containerId) {

            if (typeof containerId === 'undefined') return;

            $(containerId).html('');

            var formInfo = $(':input', form);

            var arr = $.map(formInfo, function(n, i) {
                var o = {
                    id: $(n).attr('id'),
                    val: $(n).val(),
                    label: $('label[for=' + $(n).attr('id') + ']').text()
                };
                return o;
            });

            for (var i = 0; i < arr.length; i++) {
                if (!!arr[i].val) {
                    $(containerId).append('<li class="list-group-item">' + arr[i].label + ': <b>' + arr[i].val + '</b></li>')
                }
            };

        }
    };

    // Define a wizard validation instance and wizard options
    var wizard2Validation = new ValidationWizardService('#wizard-2', wizard2ValidationSettings),
        wizard2options = {
            onLeaveStep: wizard2Validation.leaveAStepCallback,
            onFinish: wizard2Validation.onFinishCallback,
            transitionEffect: 'slide',
            labelFinish: 'Confirm'
        };


    function InitWizard(id, options) {
        var options = options || {};
        $(id).smartWizard(options);
    }

    return {
        init: function() {

            // Basic Wizard 
            InitWizard('#wizard-1');

            // Validation Wizard
            InitWizard('#wizard-2', wizard2options);
        }
    }
}();
