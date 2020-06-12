from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
User = get_user_model()


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request):
        return Response({'error': 'tienes que enviar un POST pss mascota'})

    def post(self, request, format=None):
        data = self.request.data
        name = data['name']
        email = data['email']
        password1 = data['password1']
        password2 = data['password2']

        if password1 == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'correo ya existe'})
            else:
                if len(password1) < 6:
                    return Response({'error': 'Contraseña muy pequeña'})
                else:
                    user = User.objects.create_user(email=email, password=password1, name=name)
                    user.save()
                    return Response({'success': 'Usuario Creado satisfactoriamente'})
        else:
            return Response({'error': 'Contraseñas no concuerdan =/'})