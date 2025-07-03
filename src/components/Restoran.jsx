import React from 'react';
import img1 from '../assets/retail-top.png';
import img2 from '../assets/retail-bottom.png';

const Restoran = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container max-w-[1240px] mx-auto px-[20px]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
          Для розничных магазинов и ресторанов
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <img src={img1} alt="Retail illustration top" className="w-full h-auto" />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Получайте рекомендации по управлению ассортиментом
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Каждую неделю вы будете получать письмо с рекомендациями:
                какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
                какие товары у вас в избытке, а какие следует отсечь с минималками;
                какие товары стоит пересчитать, чтобы быть уверенными в правильности учета.
              </p>
              <a href="#" className="text-green-600 text-sm mt-2 inline-block hover:underline">
                Подробнее о 1С-Ритейл Чекер →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Прогнозируйте спрос и управляйте запасами
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Используйте 1С-Товары для более точного прогноза спроса, с учетом средних продаж, трендов, сезонности, распродаж.
                Система ежедневно автоматически пересчитывает минимальные запасы и предлагает точный прогноз.
              </p>
              <a href="#" className="text-green-600 text-sm mt-2 inline-block hover:underline">
                Подробнее о 1С-Товары →
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={img2} alt="Retail illustration bottom" className="w-full h-auto" />
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Планируйте ассортимент без ошибок
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Узнайте, какие товары приносят вам прибыль и всегда должны быть в наличии, а какие лучше исключить из ассортимента.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold mb-2">
                Контролируйте бизнес и повышайте прибыль
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Используйте блок аналитики — отслеживайте продажи, прибыль, проблемы с поставками и ассортиментом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restoran;