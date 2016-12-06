from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


class AboutView(APIView):
    renderer_classes = (JSONRenderer, TemplateHTMLRenderer)
    template_name = "base.html"

    def get(self, request):
        return Response({"hello": "world"})
