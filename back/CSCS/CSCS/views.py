from django.shortcuts import render
from django.shortcuts import redirect
from django.http import JsonResponse
from django.http import HttpResponse
from django.core.files.storage import default_storage
from django.conf import settings
import os

def index1(request):
    return render(request,'index.html')

def index2(request):
    file=request.FILES['file']
    filepath=os.path.join(settings.BASE_DIR, "CSCS/images/{}".format(str(file)))
    default_storage.save(filepath,file)
    filepath='http://127.0.0.1:8080/CSCS/images/'+str(file)
    return JsonResponse({'url':filepath})

def index3(request,filename):
    imagepath = os.path.join(settings.BASE_DIR, "CSCS/images/{}".format(filename))
    with open(imagepath, 'rb') as f:
        image_data = f.read()
    return HttpResponse(image_data, content_type="image/jpeg")  

def error(request,args):
    return redirect('CSCS/home')