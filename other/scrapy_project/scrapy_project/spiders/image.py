import scrapy
from scrapy.http.response.html import HtmlResponse
from ..items import ScrapyProjectItem
import time
import random

class ImageSpider(scrapy.Spider):
    name = 'image'
    allowed_domains = ['safebooru.org']
    num = 3344502
    total = 10000
    start_urls = ['https://safebooru.org/index.php?page=post&s=view&id={}'.format(str(x)) for x in range(num,num-total,-1)]

    def parse(self, response):
        print(response.url)
        li=response.xpath('//img[@id="image"]/@src').extract()
        if li!=[]:
            print(li[0])
            urls=[li[0]]
            paths=[]
            item=ScrapyProjectItem(image_urls=urls,image_paths=paths)
            yield item 
