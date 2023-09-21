from django import forms


class OrderForm(forms.Form):
    name = forms.CharField(max_length=255, required=True, initial='')
    phone = forms.CharField(max_length=20, required=True, initial='')
    email = forms.EmailField(required=False, initial='')
