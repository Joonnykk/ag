from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator


def phone_validator(value):
    phone_regex = RegexValidator(
        regex=r"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$",
        message="Не верный формат номера.")
