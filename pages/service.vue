<template>
  <div class="service">
    <FormsTop title="SERVICE" subTitle="事業概要" />
    <div class="service__container">
      <div class="service__container__title">
        <h2 v-observe="'inview'">BIM活用の制作受託から<br>
          推進・教育支援までを<br class="sp-only">トータルサポート​</h2>
        <p v-observe="'inview'">BIM（Building Information Modeling）の<br class="sp-only">豊富な実務経験を持つスタッフが、<br>
          高品質なBIMモデルの構築 および <br class="sp-only">初級者～上級者まで幅広いレベルに対応した<br class="sp-only">教育プログラムをご提供します。​</p>
        <div class="service__container__title__border"></div>
      </div>
      <div class="service__container__bimProduction">
        <div class="service__container__bimProduction__title">
          <h2 v-observe="'inview'">BIM PRODUCTION</h2>
          <hr />
        </div>
        <div class="service__container__bimProduction__contents">
          <div class="service__container__bimProduction__contents__text" v-observe="'inview'">
            <img class="service__container__bimProduction__contents__text__image" src="/img/service/bimProduction.jpg" alt="BIM PRODUCTION">
            <h3>制作受託サービス</h3>
            <p>意匠·構造·設備(MEP)の各分野において、企画から施工·維持管理まで、<br class="pc-only">
              あらゆるフェーズに対応したBIMモデルの受託制作を行っています。<br>
              建築やインテリアの3Dモデリングをはじめ、図面との連携、<br class="pc-only">
              部品(ファミリ)のカスタム作成まで幅広く対応し、<br class="pc-only">
              豊富な実務経験を持つ専門スタッフが、柔軟にサポートします。
            </p>
          </div>
          
        </div>
        <div class="service__container__bimProduction__points" v-observe="'inview'" v-if="!useIsMobile().value">
          ​● 意匠・構造・設備（MEP）モデル制作​　● ファミリ（部品）制作​　● BIMデータのチェック・修正・最適化<br>
          ● ビジュアライズ制作（ CGパース／ムービー／ VR ／ウォークスルー）​　● 3Dスキャン、点群データのBIMモデル実装支援<br>
          ● 手描き・2D図面からの3D化支援​　● 従来のCAD図面制作　など
        </div>
        <div class="service__container__bimProduction__points" v-observe="'inview'" v-else>
          ​● 意匠・構造・設備（MEP）モデル制作<br>
          ● ファミリ（部品）制作​<br>
          ● BIMデータのチェック・修正・最適化<br>
          ● ビジュアライズ制作​<br>
          （ CGパース／ムービー／ VR ／ウォークスルー）​<br>
          ● 3Dスキャン、点群データのBIMモデル実装支援<br>
          ● 手描き・2D図面からの3D化支援<br>
          ● 従来のCAD図面制作　など
        </div>
      </div>
      <div class="service__container__bimSupport">
        <div class="service__container__bimSupport__title">
          <h2 v-observe="'inview'">BIM SUPPORT</h2>
          <hr />
        </div>
        <div class="service__container__bimSupport__contents">
          <div class="service__container__bimSupport__contents__text" v-observe="'inview'">
            <img class="service__container__bimSupport__contents__text__image" src="/img/service/bimSupport.jpg" alt="BIM PRODUCTION">
            <h3>推進・教育サービス</h3>
            <p>企業や個人のお客様に向けて、<br class="pc-only">
              BIM活用の推進(導入·定着)および教育サービスをご提供しています。<br>
              導入状況や組織特性に応じた推進支援と、あらゆるレベルに対応した<br class="pc-only">
              教育により、制作と教育の両軸で支援する、当社ならではの強みを活かし、<br class="pc-only">
              現場に即した実践的な支援と、定着に向けた長期的な伴走をお約束します。
            </p>
          </div>
          
        </div>
        <div class="service__container__bimSupport__points" v-observe="'inview'" v-if="!useIsMobile().value">
          ●BIM導入コンサルティング（戦略立案／体制整備）​　●社内標準（テンプレート・ルール）構築支援​<br>
          ●主要ツールの操作トレーニング（オンライン／オンサイト対応可）​　●実務シナリオに基づくワークショップ型研修​<br>
          ●BIM実案件に伴走するOJT型講師でのサポート​　●資格取得支援を含む、BIM人材育成戦略のサポート​　●BIMコーディネーター支援　など​
        </div>
        <div class="service__container__bimSupport__points" v-observe="'inview'" v-else>
          ●BIM導入コンサルティング<br>（戦略立案／体制整備）<br>
          ●社内標準（テンプレート・ルール）構築支援​<br>
          ●主要ツールの操作トレーニング<br>（オンライン／オンサイト対応可）​<br>
          ●実務シナリオに基づくワークショップ型研修​<br>
          ●BIM実案件に伴走するOJT型講師でのサポート<br>
          ●資格取得支援を含む、<br>BIM人材育成戦略のサポート<br>
          ●BIMコーディネーター支援　など​
        </div>
      </div>
      <div class="service__container__application" v-observe="'inview'">
        <h2 class="service__container__application__title">対応可能アプリケーション</h2>
        <div class="service__container__application__list">
          <p class="service__container__application__list__item">Revit</p>
          <p class="service__container__application__list__item">Navisworks</p>
          <p class="service__container__application__list__item">Twinmotion</p>
          <p class="service__container__application__list__item">Enscape</p>
          <p class="service__container__application__list__item">Lumion</p>
          <p class="service__container__application__list__item">AutoCAD</p>
          <p class="service__container__application__list__item">JwCAD</p>
          <p class="service__container__application__list__item">Vectorworks</p>
        </div>
        <p class="service__container__application__text">
          その他のアプリケーション（ソフトウェア）に<br class="sp-only">ついてもご相談ください
        </p>
      </div>
      <div class="service__container__features">
        <div class="service__container__features__title">
          <div class="mask">
            <h3 class="service__container__features__title__text" v-observe="'inview'">Features</h3>
          </div>
          <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
          <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
          <div class="mask">
            <h3 class="service__container__features__title__text__sub" v-observe="'inview'">ミライコニックの特徴</h3>
          </div>
        </div>
        <div class="service__container__features__text">
          <p v-observe="'inview'">
            ミライコニックは、<br class="sp-only">本気で制作する人が、<br class="sp-only">本気で教えるチームです。<br>
            私たちが目指すのは、<br class="sp-only">“実務に根づくBIM”。<br>
            技術力と伝える力、<br class="sp-only">その両輪で現場に向き合い、<br class="sp-only">お客様に寄り添います。<br>
            ただ新しいだけのDXではなく、<br class="sp-only">変革の足元を照らし続けます。<br>
          </p>
          <div class="service__container__features__text__vertical"></div>
        </div>
        <div class="service__container__features__contents" v-if="!useIsMobile().value">
          <div class="service__container__features__contents__item right" v-observe="'inview'">
            <img src="/img/service/features1.jpg" alt="bim specialist" class="service__container__features__contents__item__text__image">
            <div class="service__container__features__contents__item__text">
              <div class="service__container__features__contents__item__text__title">
                <h3>実務経験豊富な​<br>
                  BIMスペシャリストが対応​</h3>
              </div>
              <div class="service__container__features__contents__item__text__explanation">
                ミライコニックのスタッフは、BIM実務歴10年以上のスペシャリストです。<br>
                現場を熟知しているからこそ、実践的で柔軟な対応が可能です。​<br>
                ●プロジェクトの目的に応じた、最適なモデリングやビジュアライゼーション​<br>
                ●本質的な課題を捉えた、BIM推進（導入・定着）の課題解決サポート<br>
                豊富な知見と実績をもとに、​​<br>
                「制作」と「推進」、両面から高品質なサービスをご提供します。
              </div>
            </div>
            <div class="service__container__features__contents__item__line" />
          </div>
          <div class="service__container__features__contents__item left" v-observe="'inview'">
            <div class="service__container__features__contents__item__line" />
            <div class="service__container__features__contents__item__text">
              <img src="/img/service/features2.jpg" alt="bim specialist" class="service__container__features__contents__item__text__image" v-if="useIsMobile().value">
              <div class="service__container__features__contents__item__text__title">
                <h3>制作も教育も、​<br>
                  BIM活用をワンストップで支援​​​</h3>
              </div>
              <div class="service__container__features__contents__item__text__explanation">
                ミライコニックは、制作と教育の高レベルな連携により、​<br>
                実践的かつスムーズなBIM推進を実現しています。​<br>
                ●制作現場で得た知見を活かした、実務的なトレーニング​​<br>
                ●教育現場で培った「伝える力」を活かした、明快で透明な制作プロセス​​<br>
                この2つを掛け合わせることで、BIMに不慣れなご担当者様にも​<br>
                安心して導入・運用いただけるサポート体制を整えています。​
              </div>
            </div>
            <img src="/img/service/features2.jpg" alt="bim specialist" class="service__container__features__contents__item__text__image" v-if="!useIsMobile().value">
          </div>
          <div class="service__container__features__contents__item right" v-observe="'inview'">
            <img src="/img/service/features3.jpg" alt="bim specialist" class="service__container__features__contents__item__text__image">
            <div class="service__container__features__contents__item__text">
              <div class="service__container__features__contents__item__text__title">
                <h3>建築からインテリア、​<br>
                  多様な業種やフェーズに対応​​</h3>
              </div>
              <div class="service__container__features__contents__item__text__explanation">
                建築・インテリアをはじめとした多様な業種・フェーズに対応可能です。​<br>
                方針が定まりにくいBIM案件にも柔軟に対応します。<br>
                ●建築：構造体の特性に即したモデリング​<br>
                ●インテリア：設計範囲に応じた最適なモデリング​<br>
                さらに、詳細度のコントロールや修正・変更対応などにも、​​<br>
                的確な判断で対応し、プロジェクトのスムーズな進行を支援します。​
              </div>
            </div>
            <div class="service__container__features__contents__item__line" />
          </div>
        </div>
        <div class="service__container__features__contentsSp" v-else>
          <div class="service__container__features__contentsSp__item right">
            <div class="service__container__features__contentsSp__item__text">
              <img src="/img/service/features1.jpg" alt="bim specialist" class="service__container__features__contentsSp__item__text__image" v-observe="'inview'">
              <div class="service__container__features__contentsSp__item__text__title" v-observe="'inview'">
                <h3>実務経験豊富な​<br>
                  BIMスペシャリストが対応​</h3>
              </div>
              <div class="service__container__features__contentsSp__item__text__explanation" v-observe="'inview'">
                ミライコニックのスタッフは、BIM実務歴10年以上のスペシャリストです。現場を熟知しているからこそ、実践的で柔軟な対応が可能です。​<br>
                ●プロジェクトの目的に応じた、最適なモデリングやビジュアライゼーション​<br>
                ●本質的な課題を捉えた、BIM推進（導入・定着）の課題解決サポート<br>
                豊富な知見と実績をもとに、「制作」と「推進」、両面から高品質なサービスをご提供します。
              </div>
            </div>
            <div class="service__container__features__contentsSp__item__line" />
          </div>
          <div class="service__container__features__contentsSp__item left">
            <div class="service__container__features__contentsSp__item__line" />
            <div class="service__container__features__contentsSp__item__text">
              <img src="/img/service/features2.jpg" alt="bim specialist" class="service__container__features__contentsSp__item__text__image" v-observe="'inview'">
              <div class="service__container__features__contentsSp__item__text__title" v-observe="'inview'">
                <h3>制作も教育も、​<br>
                  BIM活用をワンストップで支援</h3>
              </div>
              <div class="service__container__features__contentsSp__item__text__explanation" v-observe="'inview'">
                ミライコニックは、制作と教育の高レベルな連携により、​<br>
                実践的かつスムーズなBIM推進を実現しています。<br>
                ●制作現場で得た知見を活かした、実務的なトレーニング​​<br>
                ●教育現場で培った「伝える力」を活かした、明快で透明な制作プロセス​​<br>
                この2つを掛け合わせることで、BIMに不慣れなご担当者様にも安心して導入・運用いただけるサポート体制を整えています。​
              </div>
            </div>
          </div>
          <div class="service__container__features__contentsSp__item right">
            <div class="service__container__features__contentsSp__item__text">
              <img src="/img/service/features3.jpg" alt="bim specialist" class="service__container__features__contentsSp__item__text__image" v-observe="'inview'">
              <div class="service__container__features__contentsSp__item__text__title" v-observe="'inview'">
                <h3>建築からインテリア、​<br>
                  多様な業種やフェーズに対応</h3>
              </div>
              <div class="service__container__features__contentsSp__item__text__explanation" v-observe="'inview'">
                建築・インテリアをはじめとした多様な業種・フェーズに対応可能です。​<br>
                方針が定まりにくいBIM案件にも柔軟に対応します。<br>
                ●建築：構造体の特性に即したモデリング​<br>
                ●インテリア：設計範囲に応じた最適なモデリング​<br>
                さらに、詳細度のコントロールや修正・変更対応などにも、的確な判断で対応し、プロジェクトのスムーズな進行を支援します。​
              </div>
            </div>
            <div class="service__container__features__contentsSp__item__line" />
          </div>
        </div>
      </div>
      <div class="service__container__member">
        <div class="service__container__member__title">
          <div class="mask">
            <h3 class="service__container__member__title__text" v-observe="'inview'">Member</h3>
          </div>
          <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
          <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
          <div class="mask">
            <h3 class="service__container__member__title__text__sub" v-observe="'inview'">ミライコニックのメンバー</h3>
          </div>
        </div>
        <div class="service__container__member__contents">
          <div class="service__container__member__contents__item" v-observe="'inview'">
            <div class="service__container__member__contents__item__top">
              <div class="service__container__member__contents__item__top__name">
                <h2 class="service__container__member__contents__item__top__name__text">
                  Hiramoto<br>
                  Yuta
                </h2>
                <p class="service__container__member__contents__item__top__name__experience">BIM実務歴11年</p>
                <p class="service__container__member__contents__item__top__name__license">BIM利用技術者検定 1級</p>
              </div>
              <div class="service__container__member__contents__item__top__image">
                <img src="/img/service/hiramoto.png" alt="member">
              </div>
            </div>
            <div class="service__container__member__contents__item__bottom">
              <div class="service__container__member__contents__item__bottom__free">
                <h3 class="service__container__member__contents__item__bottom__free__title">
                  ◎自由欄タイトルが入ります。
                </h3>
                <p class="service__container__member__contents__item__bottom__free__text">
                  自由欄の内容がここに入ります。自由欄の内容がここに入ります。自由欄の内容がここに入ります。
                </p>
              </div>
              <div class="service__container__member__contents__item__bottom__achieve">
                <h3 class="service__container__member__contents__item__bottom__achieve__title">
                  実績（一部抜粋）
                </h3>
                <p class="service__container__member__contents__item__bottom__achieve__text">
                  ○マンション(実施)／BIMモデリング・図面制作<br>
                  ○デザインホテル／BIMモデリング・ファミリ制作<br>
                  ○内装デザイン会社向けBIM教育カリキュラムの策定・実施
                </p>
              </div>
            </div>
          </div>
          <div class="service__container__member__contents__item" v-observe="'inview'">
            <div class="service__container__member__contents__item__top">
              <div class="service__container__member__contents__item__top__name">
                <h2 class="service__container__member__contents__item__top__name__text">
                  Aketa<br>
                  Syouichi
                </h2>
                <p class="service__container__member__contents__item__top__name__experience">BIM実務歴11年</p>
                <p class="service__container__member__contents__item__top__name__license">BIM利用技術者検定 1級、<br>Revitユーザー資格試験合格</p>
              </div>
              <div class="service__container__member__contents__item__top__image">
                <img src="/img/service/aketa.png" alt="member">
              </div>
            </div>
            <div class="service__container__member__contents__item__bottom">
              <div class="service__container__member__contents__item__bottom__free">
                <h3 class="service__container__member__contents__item__bottom__free__title">
                  ◎自由欄タイトルが入ります。
                </h3>
                <p class="service__container__member__contents__item__bottom__free__text">
                  自由欄の内容がここに入ります。自由欄の内容がここに入ります。自由欄の内容がここに入ります。
                </p>
              </div>
              <div class="service__container__member__contents__item__bottom__achieve">
                <h3 class="service__container__member__contents__item__bottom__achieve__title">
                  実績（一部抜粋）
                </h3>
                <p class="service__container__member__contents__item__bottom__achieve__text">
                  ○マンション(施工)／BIMモデリング・ファミリ制作・図面制作<br>
                  ○大規模シェアオフィス／BIMモデリング・ファミリ制作・図面制作<br>
                  ○ゼネコン向け施工BIM標準化構築から教育カリキュラムの策定・実施
                </p>
              </div>
            </div>
          </div>
          <div class="service__container__member__contents__item" v-observe="'inview'">
            <div class="service__container__member__contents__item__top">
              <div class="service__container__member__contents__item__top__name">
                <h2 class="service__container__member__contents__item__top__name__text">
                  Koyama<br>
                  Emiri
                </h2>
                <p class="service__container__member__contents__item__top__name__experience">BIM実務歴6年</p>
                <p class="service__container__member__contents__item__top__name__license">BIM利用技術者検定 2級、<br>Revitユーザー資格試験合格</p>
              </div>
              <div class="service__container__member__contents__item__top__image">
                <img src="/img/service/koyama.png" alt="member">
              </div>
            </div>
            <div class="service__container__member__contents__item__bottom">
              <div class="service__container__member__contents__item__bottom__free">
                <h3 class="service__container__member__contents__item__bottom__free__title">
                  ◎自由欄タイトルが入ります。
                </h3>
                <p class="service__container__member__contents__item__bottom__free__text">
                  自由欄の内容がここに入ります。自由欄の内容がここに入ります。自由欄の内容がここに入ります。
                </p>
              </div>
              <div class="service__container__member__contents__item__bottom__achieve">
                <h3 class="service__container__member__contents__item__bottom__achieve__title">
                  実績（一部抜粋）
                </h3>
                <p class="service__container__member__contents__item__bottom__achieve__text">
                  ○アパレル店舗／BIMモデリング・ファミリ制作<br>
                  ○展示会／BIMモデリング・ファミリ制作<br>
                  ○アパレル店舗の多店舗展開に向けたBIM標準化構築
                </p>
              </div>
            </div>
          </div>
          <div class="service__container__member__contents__item" v-observe="'inview'">
            <div class="service__container__member__contents__item__top">
              <div class="service__container__member__contents__item__top__name">
                <h2 class="service__container__member__contents__item__top__name__text">
                  Higashi<br>
                  Ai
                </h2>
                <p class="service__container__member__contents__item__top__name__experience">BIM実務歴6年</p>
                <p class="service__container__member__contents__item__top__name__license">BIM利用技術者検定 2級、<br>建築CAD検定 2級​</p>
              </div>
              <div class="service__container__member__contents__item__top__image">
                <img src="/img/service/higashi.png" alt="member">
              </div>
            </div>
            <div class="service__container__member__contents__item__bottom">
              <div class="service__container__member__contents__item__bottom__free">
                <h3 class="service__container__member__contents__item__bottom__free__title">
                  ◎自由欄タイトルが入ります。
                </h3>
                <p class="service__container__member__contents__item__bottom__free__text">
                  自由欄の内容がここに入ります。自由欄の内容がここに入ります。自由欄の内容がここに入ります。
                </p>
              </div>
              <div class="service__container__member__contents__item__bottom__achieve">
                <h3 class="service__container__member__contents__item__bottom__achieve__title">
                  実績（一部抜粋）
                </h3>
                <p class="service__container__member__contents__item__bottom__achieve__text">
                  ○教育機関／BIMモデリング・ファミリ制作<br>
                  ○デジタルアートミュージアム／BIMモデリング・ファミリ制作<br>
                  ○空港免税エリア／増改築部CG制作
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="service__container__casestudy">
        <div class="service__container__casestudy__title">
          <div class="mask">
            <h3 class="service__container__casestudy__title__text" v-observe="'inview'">Case study</h3>
          </div>
          <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
          <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
          <div class="mask">
            <h3 class="service__container__casestudy__title__text__sub" v-observe="'inview'">提供事例</h3>
          </div>
        </div>
        <Splide
          v-if="!useIsMobile().value"
          class="service__container__casestudy__splide"
          :options="splideOptions"
          ref="splide"
          v-observe="'inview'"
        >
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag">推進</p>
              <p class="tag dark">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag dark">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag dark">制作</p>
              <p class="tag">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag">推進</p>
              <p class="tag dark">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag dark">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <Splide
          v-else
          class="service__container__casestudy__splideSp"
          :options="splideOptionsSp"
          ref="splideSp"
          v-observe="'inview'"
        >
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag">推進</p>
              <p class="tag dark">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag dark">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag dark">制作</p>
              <p class="tag">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag">推進</p>
              <p class="tag dark">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="service__container__casestudy__splide__item">
            <div class="service__container__casestudy__splide__item-title">
              <p>某大手空間デザイン企業様</p>
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
            <div class="service__container__casestudy__splide__item-tag">
              <p class="tag">制作</p>
              <p class="tag dark">推進</p>
              <p class="tag">教育</p>
            </div>
            <div class="service__container__casestudy__splide__item-contents">
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>課題　：</h4>
                <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>提供支援内容　：</h4>
                <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
                  BIM教育講座の教材をゼロから制作<br>
                  講師として社内トレーニングも実施</p>
              </div>
              <div class="service__container__casestudy__splide__item-contents-text">
                <h4>成果　：</h4>
                <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
                  教育の定着を見据えた運用体制の構築にも貢献</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <Qa />
      <div class="service__container__bimProduction__bg1" style="z-index: 0;">
        <div class="service__container__bimProduction__bg__contents">
          <img src="/img/service/service-pt1.svg" alt="service_bg" class="service__container__bimProduction__bg__contents__pt1" v-observe="'inview'">
        </div>
      </div>
      <div class="service__container__bimProduction__bg2" style="z-index: 0;">
        <div class="service__container__bimProduction__bg__contents">
          <img src="/img/service/service-pt2.svg" alt="service_bg" class="service__container__bimProduction__bg__contents__pt2" v-observe="'inview'">
        </div>
      </div>
      <div class="service__container__bimProduction__bg3" style="z-index: 0;">
        <div class="service__container__bimProduction__bg__contents">
          <img src="/img/service/service-pt3.svg" alt="service_bg" class="service__container__bimProduction__bg__contents__pt3" v-observe="'inview'">
        </div>
      </div>
      <div class="service__container__bimProduction__bg4" style="z-index: 0;" v-if="!useIsMobile().value">
        <div class="service__container__bimProduction__bg__contents">
          <img src="/img/service/service-pt1.svg" alt="service_bg" class="service__container__bimProduction__bg__contents__pt4" v-observe="'inview'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';

export default {
  name: 'Service',
  mixins: [scrollParallaxMixin],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      title: 'SERVICE',
      splideOptions: {
        type: 'loop',
        speed: 750,
        perPage: 1,
        drag: 'free',
        snap: true,
        autoplay: true, 
        autoWidth: true,
        pagination: true,
        gap: '2.77vw',
        focus: 'center',
        classes: {
          pagination: 'pagination',
          page: 'page',
        },
        arrows: true,
        arrowPath  : 'M1 35.7769C1 38.0923 3.51164 39.5349 5.51161 38.3682L32.5577 22.5913C34.5422 21.4337 34.5422 18.5663 32.5577 17.4087L5.51161 1.63177C3.51164 0.465122 1 1.90774 1 4.22311L1 35.7769Z',
        arrowWidth : 36,
        arrowHeight: 40,
      },
      splideOptionsSp: {
        type: 'loop',
        speed: 750,
        perPage: 1,
        drag: 'free',
        snap: true,
        autoplay: true,
        autoWidth: true,
        pagination: true,
        gap: '2.77vw',
        focus: 'center',
        classes: {
          pagination: 'pagination',
          page: 'page',
        },
        arrows: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.service {
  background-color: #F2F2F2;
  @include mixins.max-screen(768px) {
    padding-bottom: 10vw;
  }
  &__container {
    position: relative;
    &__title {
      width: min(1120px, 77.77vw);
      margin: 0 auto;
      color: #252526;
      padding-left: min(24px, 1.66vw);
      margin-top: min(79px, 5.48vw);
      position: relative;
      z-index: 1;
      @include mixins.max-screen(768px) {
        width: 86.93vw;
        padding-left: 2.66vw;
      }
      h2 {
        font-size: min(50px, 3.47vw);
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0.03em;
        opacity: 0;
        transform: translateY(100px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          font-size: 6.4vw;
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
      p {
        font-size: min(18px, 1.25vw);
        font-weight: 500;
        line-height: 2;
        letter-spacing: 0.05em;
        margin-top: min(16px, 1.11vw);
        line-height: 2;
        opacity: 0;
        transform: translateY(100px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
          line-height: 1.8;
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
      &__border {
        width: min(6px, 0.41vw);
        height: min(210px, 14.58vw);
        background-color: #252526;
        margin-top: min(16px, 1.11vw);
        position: absolute;
        left: 0;
        top: 2%;
        @include mixins.max-screen(768px) {
          height: 100%;
          top: -1%;
        }
      }
    }
    &__bimProduction {
      width: min(1280px, 88.88vw);
      margin: 0 auto;
      margin-top: min(79px, 5.48vw);
      padding: min(50px, 3.47vw) 0 min(50px, 3.47vw) min(80px, 5.55vw);
      background-color: #fff;
      border-top-left-radius: min(120px, 8.33vw);
      border-bottom-left-radius: min(120px, 8.33vw);
      position: relative;
      z-index: 1;
      @include mixins.max-screen(768px) {
        border-top-left-radius: 16vw;
        border-bottom-left-radius: 16vw;
        padding: 13.33vw 0 13.33vw 5.33vw;
      }
      &__title {
        position: relative;
        z-index: 1;

        h2 {
          font-size: min(100px, 6.94vw);
          color: #3676B6;
          letter-spacing: 0.001em;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 13.33vw;
            transform: translateY(100%);
          }
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
        }
        hr {
          border: none;
          width: 100vw;
          height: min(2px, 0.41vw);
          background-color: #3676B6;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
      }
      &__contents {
        &__text {
          margin-top: min(40px, 2.77vw);
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
          h3 {
            font-size: min(24px, 1.66vw);
            font-weight: 700;
            letter-spacing: 0.05em;
            line-height: 2;
            @include mixins.max-screen(768px) {
              font-size: 4.8vw;
              margin-top: 2.4vw;
            }
          }
          p {
            font-size: min(18px, 1.25vw);
            font-weight: 500;
            line-height: 2;
            letter-spacing: 0.05em;
            margin-top: min(5px, 0.34vw);
            @include mixins.max-screen(768px) {
              font-size: 3.2vw;
              line-height: 1.8;
            }
          }
          &__image {
            display: block;
            position: absolute;
            right: min(80px, 5.55vw);
            bottom: 0%;
            width: min(460px, 31.94vw);
            @include mixins.max-screen(768px) {
              width: 100%;
              position: static;
              margin-top: 5.33vw;
            }
          }
        }

      }
      &__points {
        font-size: min(16px, 1.11vw);
        font-weight: 700;
        line-height: 2;
        letter-spacing: 0.05em;
        margin-top: min(50px, 3.47vw);
        width: min(1120px, 77.77vw);
        background-color: #F2F2F2;
        border-radius: min(20px, 1.38vw);
        padding: min(20px, 1.38vw) min(24px, 1.66vw);
        position: relative;
        z-index: 1;
        color: #252526;
        opacity: 0;
        transform: translateY(70px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          font-size: 3.2vw;
          border-radius: 5.33vw;
          width: 100%;
          padding: 3.5vw;
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100vw;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: -100%;
        z-index: 0;
      }
    }
    &__bimSupport {
      width: min(1280px, 88.88vw);
      margin: 0 auto;
      margin-top: min(79px, 5.48vw);
      padding: min(50px, 3.47vw) 0 min(50px, 3.47vw) min(80px, 5.55vw);
      background-color: #fff;
      border-top-right-radius: min(120px, 8.33vw);
      border-bottom-right-radius: min(120px, 8.33vw);
      position: relative;
      z-index: 1;
      @include mixins.max-screen(768px) {
        border-top-right-radius: 16vw;
        border-bottom-right-radius: 16vw;
        padding: 13.33vw 5.33vw 13.33vw 0;
      }
      &__title {
        position: relative;
        z-index: 1;
        width: min(1120px, 77.77vw);
        h2 {
          font-size: min(100px, 6.94vw);
          color: #3676B6;
          letter-spacing: 0.001em;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          width: min(1280px, 88.88vw);
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 13.33vw;
            transform: translateY(100%);
          }
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
        }
        hr {
          border: none;
          width: 100vw;
          height: min(2px, 0.41vw);
          background-color: #3676B6;
          position: absolute;
          bottom: 0;
          right: 0;
          @include mixins.max-screen(768px) {
            right: -5.33vw;
          }
        }
      }
      &__contents {
        &__text {
          margin-top: min(40px, 2.77vw);
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
          h3 {
            font-size: min(24px, 1.66vw);
            font-weight: 700;
            letter-spacing: 0.05em;
            line-height: 2;
            @include mixins.max-screen(768px) {
              font-size: 4.8vw;
              margin-top: 2.4vw;
            }
          }
          p {
            font-size: min(18px, 1.25vw);
            font-weight: 500;
            line-height: 2;
            letter-spacing: 0.05em;
            margin-top: min(5px, 0.34vw);
            @include mixins.max-screen(768px) {
              font-size: 3.2vw;
              line-height: 1.8;
            }
          }
          &__image {
            display: block;
            position: absolute;
            right: min(80px, 5.55vw);
            bottom: 0%;
            width: min(460px, 31.94vw);
            @include mixins.max-screen(768px) {
              width: 100%;
              position: static;
              margin-top: 5.33vw;
            }
          }
        }

      }
      &__points {
        font-size: min(16px, 1.11vw);
        font-weight: 700;
        line-height: 2;
        letter-spacing: 0.05em;
        margin-top: min(50px, 3.47vw);
        width: min(1120px, 77.77vw);
        background-color: #F2F2F2;
        border-radius: min(20px, 1.38vw);
        padding: min(20px, 1.38vw) min(24px, 1.66vw);
        position: relative;
        z-index: 1;
        color: #252526;
        opacity: 0;
        transform: translateY(70px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          font-size: 3.2vw;
          border-radius: 5.33vw;
          width: 100%;
          padding: 3.5vw;
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 100vw;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 0;
      }
    }
    &__application {
      width: min(1280px, 88.88vw);
      margin: 0 auto;
      margin-top: min(79px, 5.48vw);
      padding: min(20px, 1.38vw) min(80px, 5.55vw) min(20px, 1.38vw);
      background-color: #DCF4FF;
      border-radius: min(120px, 8.33vw);
      opacity: 0;
      transform: translateY(70px);
      transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
      @include mixins.max-screen(768px) {
        border-radius: 16vw;
        padding: 5.33vw 2.66vw;
        width: 86.66vw;
      }
      &.inview {
        transform: translateY(0);
        opacity: 1;
      }
      &__title {
        font-size: min(28px, 1.94vw);
        color: #252526;
        letter-spacing: 0.001em;
        font-weight: 700;
        text-align: center;
        @include mixins.max-screen(768px) {
          font-size: 4.8vw;
        }
      }
      &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: min(18px, 1.25vw);
        margin-top: min(20px, 1.38vw);
        @include mixins.max-screen(768px) {
          gap: 2.66vw;
          margin-top: 5.33vw;
        }
        &__item {
          font-size: min(40px, 2.77vw);
          background-color: #fff;
          color: #3676B6;
          padding: min(10px, 0.69vw) min(20px, 1.38vw);
          border-radius: min(150px, 10.41vw);
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          letter-spacing: 0.001em;
          width: min(250px, 17.36vw);
          text-align: center;
          @include mixins.max-screen(768px) {
            font-size: 8vw;
            width: 39.2vw;
            padding: 2.66vw 0;
            border-radius: 40vw;
          }
        }
      }
      &__text {
        font-size: min(16px, 1.11vw);
        font-weight: 500;
        line-height: 2;
        letter-spacing: 0.05em;
        margin-top: min(20px, 1.38vw);
        text-align: center;
        @include mixins.max-screen(768px) {
          font-size: 3.2vw;
          margin-top: 6.66vw;
        }
      }
    }
    &__features {
      background-color: #fff;
      color: #252526;
      margin-top: min(100px, 6.94vw);
      padding: min(50px, 3.47vw) 0 min(100px, 6.94vw);
      &__title {
        &__text {
          font-size: min(5.55vw, 80px);
          text-align: center;
          //letter-spacing: 0.01em;
          letter-spacing: 0.001em;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          font-style: normal;
          margin-top: min(16px, 1.11vw);
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 16vw;
            margin-top: 2.66vw;
          }
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
          &__sub {
            font-size: min(1.25vw, 18px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(1.25vw, 18px);
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out;
            @include mixins.max-screen(768px) {
              font-size: 4.26vw;
              margin-top: 2.66vw;
              transform: translateY(90%);
            }
            &.inview {
              transform: translateY(0);
            }
          }
        }

      }
      .title_line {
        display: block;
        width: 6.25vw;
        max-width: 90px;
        margin: 0 auto;
        @include mixins.max-screen(768px) {
          width: 23.46vw;
          max-width: auto;
        }
      }
      &__text {
        font-size: min(28px, 1.94vw);
        font-weight: 500;
        line-height: 2;
        letter-spacing: 0.05em;
        margin-top: min(20px, 1.38vw);
        display: block;
        margin: min(16px, 1.11vw) auto;
        width: fit-content;
        border-left: 4px solid #252526;
        padding-left: min(16px, 1.11vw);
        font-weight: 700;
        @include mixins.max-screen(768px) {
          font-size: 4.8vw;
          margin-top: 6.66vw;
          padding-left: 2.66vw;
        }
        p {
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      &__contents {
        margin-top: min(100px, 6.94vw);
        &__item {
          display: flex;
          align-items: center;
          width: 100vw;
          margin-top: min(50px, 3.47vw);
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
          &.right {
            justify-content: flex-end;
            .service__container__features__contents__item__text {
              margin: 0 min(30px, 2.08vw) 0 min(52px, 3.61vw);
            }
          }
          &.left {
            justify-content: flex-start;
            .service__container__features__contents__item__text {
              margin: 0 min(52px, 3.61vw) 0 min(30px, 2.08vw);
            }
          }
          &__text {
            width: min(662px, 45.97vw);
            &__image {
              width: min(560px, 38.88vw);
            }
            &__title {
              h3 {
                font-size: min(46px, 3.19vw);
                font-weight: 700;
                letter-spacing: 0.03em;
                line-height: 1.4;
              }
            }
            &__explanation {
              font-size: min(18px, 1.25vw);
              font-weight: 500;
              line-height: 2;
              letter-spacing: 0.05em;
              margin-top: min(16px, 1.11vw);
            }
          }
          &__line {
            width: min(50px, 3.47vw);
            height: min(360px, 25vw);
            background-color: #3676B6;
          }
        }
      }
      &__contentsSp {
        position: relative;
        z-index: 1;
        &__item {
          display: flex;
          margin-top: 10.66vw;
          &.right {
            justify-content: flex-end;
          }
          &.left {
            justify-content: flex-start;
            .service__container__features__contentsSp__item__text {
              &__title {
                margin-left: 5.33vw;
              }
              &__explanation {
                margin-left: 5.33vw;
              }
            }
          }
          &__text {
            &__image {
              width: 92vw;
              opacity: 0;
              transform: translateY(70px);
              transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
              &.inview {
                opacity: 1;
                transform: translateY(0);
              }
            }
            &__title {
              opacity: 0;
              transform: translateY(70px);
              transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
              &.inview {
                opacity: 1;
                transform: translateY(0);
              }
              h3 {
                font-size: 4.8vw;
                font-weight: 700;
                letter-spacing: 0.1em;
                line-height: 1.5;
                margin-top: 3.73vw;
              }
            }
            &__explanation {
              font-size: 3.2vw;
              font-weight: 500;
              line-height: 1.8;
              letter-spacing: 0.04em;
              width: 86.66vw;
              margin-top: 1.06vw;
              opacity: 0;
              transform: translateY(70px);
              transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
              &.inview {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }
          &__line {
            width: 4vw;
            height: auto;
            background-color: #3676B6;
          }
        }
      }
    }
    &__member {
      color: #252526;
      padding: min(50px, 3.47vw) 0 min(100px, 6.94vw);
      position: relative;
      z-index: 1;
      &__title {
        &__text {
          font-size: min(5.55vw, 80px);
          text-align: center;
          //letter-spacing: 0.01em;
          letter-spacing: 0.001em;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          font-style: normal;
          margin-top: min(16px, 1.11vw);
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 16vw;
            margin-top: 2.66vw;
          }
          &.inview {
            transform: translateY(0);
          }
          &__sub {
            font-size: min(1.25vw, 18px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(1.25vw, 18px);
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out;
            @include mixins.max-screen(768px) {
              font-size: 4.26vw;
              margin-top: 2.66vw;
              transform: translateY(90%);
            }
            &.inview {
              transform: translateY(0);
            }
          }
        }
      }
      .title_line {
        display: block;
        width: 6.25vw;
        max-width: 90px;
        margin: 0 auto;
        @include mixins.max-screen(768px) {
          width: 23.46vw;
          max-width: auto;
        }
      }
      &__contents {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: min(40px, 2.77vw);
        width: min(1280px, 88.88vw);
        margin: 0 auto;
        margin-top: min(50px, 3.47vw);
        @include mixins.max-screen(768px) {
          gap: 5.33vw;
        }
        &__item {
          background-color: #fff;
          border-radius: min(40px, 2.77vw);
          padding: min(20px, 1.38vw) min(40px, 2.77vw);
          width: min(620px, 43.05vw);
          overflow: hidden;
          opacity: 0;
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 92vw;
            padding: 10.66vw  5.33vw;
            border-radius: 10.66vw;
          }
          &.inview {
            transform: translateY(0);
            opacity: 1;
          }
          &__top {
            display: flex;
            justify-content: space-between;
            gap: min(20px, 1.38vw);
            &__name {
              position: relative;
              &__text {
                font-size: min(80px, 5.55vw);
                letter-spacing: 0.001em;
                line-height: 1;
                font-family: "Barlow Condensed", sans-serif;
                font-weight: 600;
                color: #3676B6;
                @include mixins.max-screen(768px) {
                  font-size: 13.33vw;
                }
              }
              &__experience {
                font-size: min(16px, 1.11vw);
                font-weight: 700;
                line-height: 2;
                letter-spacing: 0.03em;
                margin-top: min(16px, 1.11vw);
                background-color: #3676B6;
                position: absolute;
                top: min(153px, 10.625vw);
                left: min(-40px, -2.77vw);
                color: #fff;
                padding-left: min(40px, 2.77vw);
                padding-right: min(23px, 1.59vw);
                border-top-right-radius: min(18px, 1.25vw);
                border-bottom-right-radius: min(18px, 1.25vw);
                @include mixins.max-screen(768px) {
                  font-size: 4.26vw;
                  top: 25.66vw;
                  left: -5.33vw;
                  padding-left: 5.33vw;
                  padding-right: 6.2vw;
                  border-top-right-radius: 4.8vw;
                  border-bottom-right-radius: 4.8vw;
                }
              }
              &__license {
                font-size: min(16px, 1.11vw);
                font-weight: 500;
                line-height: 1.4;
                letter-spacing: 0.03em;
                margin-top: min(46px, 3.19vw);
                height: min(44px, 3.05vw);
                @include mixins.max-screen(768px) {
                  font-size: 3.2vw;
                  margin-top: 10.66vw;
                }
              }
            }
            &__image {
              img {
                width: min(200px, 14.58vw);
                object-fit: contain;
                @include mixins.max-screen(768px) {
                  width: 32vw;
                  margin-top: -5.66vw;
                  margin-right: 2.66vw;
                }
              }
            }
          }
          &__bottom {
            margin-top: min(20px, 1.38vw);
            @include mixins.max-screen(768px) {
              margin-top: 9.33vw;
            }
            &__free {
              h3 {
                font-size: min(20px, 1.38vw);
                font-weight: 700;
                letter-spacing: 0.03em;
                line-height: 1.4;
                @include mixins.max-screen(768px) {
                  font-size: 3.73vw;
                }
              }
              p {
                font-size: min(20px, 1.38vw);
                font-weight: 500;
                letter-spacing: 0.05em;
                line-height: 1.4;
                margin-top: min(5px, 0.34vw);
                @include mixins.max-screen(768px) {
                  font-size: 3.73vw;
                }
              }
            }
            &__achieve {
              margin-top: min(20px, 1.38vw);
              h3 {
                font-size: min(20px, 1.38vw);
                font-weight: 700;
                letter-spacing: 0.03em;
                line-height: 1.4;
                @include mixins.max-screen(768px) {
                  font-size: 3.73vw;
                }
              }
              p {
                font-size: min(16px, 1.11vw);
                font-weight: 500;
                letter-spacing: 0.03em;
                line-height: 1.6;
                margin-top: min(5px, 0.34vw);
                @include mixins.max-screen(768px) {
                  font-size: 3.2vw;
                }
              }
            }
          }
        }
      }
    }
    &__casestudy {
      color: #252526;
      padding: min(50px, 3.47vw) 0 min(100px, 6.94vw);
      &__title {
        &__text {
          font-size: min(5.55vw, 80px);
          text-align: center;
          //letter-spacing: 0.01em;
          letter-spacing: 0.001em;
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          font-style: normal;
          margin-top: min(16px, 1.11vw);
          transform: translateY(70px);
          transition: transform 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 16vw;
            margin-top: 2.66vw;
          }
          &.inview {
            transform: translateY(0);
          }
          &__sub {
            font-size: min(1.25vw, 18px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(1.25vw, 18px);
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out;
            @include mixins.max-screen(768px) {
              font-size: 4.26vw;
              margin-top: 2.66vw;
              transform: translateY(90%);
            }
            &.inview {
              transform: translateY(0);
            }
          }
        }
      }
      .title_line {
        display: block;
        width: 6.25vw;
        max-width: 90px;
        margin: 0 auto;
        @include mixins.max-screen(768px) {
          width: 23.46vw;
          max-width: auto;
        }
      }
      .service__container__casestudy__splide {
        margin: min(60px, 4.16vw) 0 0;
        position: relative;
        z-index: 3;
        opacity: 0;
        transform: translateY(70px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
        .service__container__casestudy__splide__item {
          position: relative;
          display: block;
          background-color: #fff;
          width: min(1220px, 83.33vw);
          height: min(533px, 37.01vw);
          border-radius: min(120px, 8.33vw);
          padding: min(40px, 2.77vw);
          .service__container__casestudy__splide__item-title {
            position: relative;
            text-align: center;
            p {
              font-size: min(18px, 1.25vw);
              font-weight: 500;
            }
            h3 {
              font-size: min(36px, 2.5vw);
              font-weight: 700;
            }
          }
          .service__container__casestudy__splide__item-tag {
            display: flex;
            justify-content: center;
            gap: min(10px, 0.69vw);
            padding: min(20px, 1.38vw) 0;
            .tag {
              font-size: min(20px, 1.38vw);
              font-weight: 500;
              width: min(160px, 11.11vw);
              height: min(32px, 2.22vw);
              background-color: #DCF4FF;
              text-align: center;
              line-height: min(32px, 2.22vw);
              border-radius: min(150px, 10.41vw);
              color: #808080;
              &.dark {
                color: #fff;
                background-color: #3676B6;
              }
            }
          }
          .service__container__casestudy__splide__item-contents {
            background-color: #F2F2F2;
            width: min(1040px, 72.22vw);
            height: min(282px, 19.58vw);
            border-radius: min(10px, 0.69vw);
            margin: min(10px, 0.69vw) auto 0;
            padding: min(40px, 2.77vw) 0;
            .service__container__casestudy__splide__item-contents-text {
              display: flex;
              justify-content: center;
              gap: min(30px, 2.08vw);
              margin-bottom: min(20px, 1.38vw);
              h4 {
                font-size: min(20px, 1.38vw);
                font-weight: 700;
                text-align: right;
                letter-spacing: 0.03em;
                width: min(165px, 11.45vw);
              }
              p {
                font-size: min(18px, 1.25vw);
                font-weight: 500;
                width: min(772px, 53.61vw);
                letter-spacing: 0.05em;
              }
            }
          }
        }
      }
      .service__container__casestudy__splideSp {
        margin: min(60px, 4.16vw) 0 0;
        position: relative;
        z-index: 3;
        opacity: 0;
        transform: translateY(70px);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
        .service__container__casestudy__splide__item {
          position: relative;
          display: block;
          background-color: #fff;
          width: 94.66vw;
          //height: 190.39vw;
          height: auto;
          border-radius: 10.66vw;
          padding: 0 2.77vw 8vw;
          .service__container__casestudy__splide__item-title {
            position: relative;
            text-align: center;
            p {
              font-size: 4.26vw;
              margin-top: 8vw;
              font-weight: 500;
            }
            h3 {
              font-size: 6.4vw;
              font-weight: 700;
              margin-top: 2.13vw;
            }
          }
          .service__container__casestudy__splide__item-tag {
            display: flex;
            justify-content: center;
            gap: min(10px, 0.69vw);
            padding: min(20px, 1.38vw) 0;
            margin-top: 4.26vw;
            .tag {
              font-size: 4.26vw;
              font-weight: 500;
              width: 24vw;
              height: 6.93vw;
              background-color: #DCF4FF;
              text-align: center;
              line-height: 6.93vw;
              border-radius: 10.66vw;
              color: #808080;

              &.dark {
                color: #fff;
                background-color: #3676B6;
              }
            }
          }
          .service__container__casestudy__splide__item-contents {
            background-color: #F2F2F2;
            width: 86.66vw;
            height: 128vw;
            border-radius: 2.66vw;
            margin: 8vw auto 0;
            padding: 5.33vw;
            .service__container__casestudy__splide__item-contents-text {
              display: block;
              margin-bottom: min(20px, 1.38vw);
              h4 {
                font-size: 4.8vw;
                font-weight: 700;
                text-align: left;
                letter-spacing: 0.03em;
                width: auto;
                margin-top: 2.33vw;
              }
              p {
                font-size: 4.26vw;
                font-weight: 500;
                line-height: 1.6;
                width: auto;
                letter-spacing: 0.05em;
                margin-top: 1.33vw;
              }
            }
          }
        }
      }
    }
    .service__container__bimProduction__bg1 {
      position: absolute;
      top: 0;
      right: 1%;
      height: 100%;
      @include mixins.max-screen(768px) {
        right: -2%;
      }
      .service__container__bimProduction__bg__contents {
        margin-top: min(13.88vw, 200px);
        margin-left: min(2.77vw, 40px);
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        @include mixins.max-screen(768px) {
          margin-top: 45vw;
        }
        .service__container__bimProduction__bg__contents__pt1 {
          width: min(12.5vw, 180px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 21.86vw;
          }
          &.inview {
            transform: scale(1);
          }
        }
      }
    }
    .service__container__bimProduction__bg2 {
      position: absolute;
      top: 24%;
      left: -6%;
      height: 100%;
      .service__container__bimProduction__bg__contents {
        margin-left: min(2.77vw, 40px);
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        @include mixins.max-screen(768px) {
          margin-left: -3vw;
        }
        .service__container__bimProduction__bg__contents__pt2 {
          width: min(15.9vw, 229px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 36.26vw;
          }
          &.inview {
            transform: scale(1);
          }
        }
      }
    }
    .service__container__bimProduction__bg3 {
      position: absolute;
      top: 49%;
      right: -4%;
      height: 100%;
      @include mixins.max-screen(768px) {
        top: 45%;
        right: -15%;
      }
      .service__container__bimProduction__bg__contents {
        margin-left: min(2.77vw, 40px);
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        @include mixins.max-screen(768px) {
          margin-left: -3vw;
        }
        .service__container__bimProduction__bg__contents__pt3 {
          width: min(10.97vw, 158px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 36.26vw;
          }
          &.inview {
            transform: scale(1);
          }
        }
      }
    }
    .service__container__bimProduction__bg4 {
      position: absolute;
      top: 60%;
      left: 0%;
      height: 100%;
      .service__container__bimProduction__bg__contents {
        margin-left: min(2.77vw, 40px);
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        @include mixins.max-screen(768px) {
          margin-left: -3vw;
        }
        .service__container__bimProduction__bg__contents__pt4 {
          width: min(12.5vw, 180px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 36.26vw;
          }
          &.inview {
            transform: scale(1);
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
:deep(.pagination) {
  display: flex;
  justify-content: center;
  gap: min(10px, 0.69vw);
  margin: min(40px, 2.77vw) 0 0;
  /* z-index を上げたいならここで */
  z-index: 10;
  list-style: none;
  @include mixins.max-screen(768px) {
    gap: 1.6vw;
  }
}

:deep(.page) {
  width: min(100px, 6.94vw);
  height: min(5px, 0.34vw);
  background-color: #A0A0A0;
  border-radius: min(150px, 10.41vw);
  @include mixins.max-screen(768px) {
    width: 10.66vw;
    height: 0.8vw;
    border-radius: 40vw;
  }
}

:deep(.page.is-active) {
  background-color: #3676B6;
}

:deep(.splide__arrow) {
  background-color: transparent;
  border: 2px solid #3676B6;
  width: min(108px, 7.5vw);
  height: min(108px, 7.5vw);
  &.splide__arrow--next {
    svg {
      margin-left: 6%;
    }
  }
  &.splide__arrow--prev {
    svg {
      margin-right: 6%;
    }
  }
  svg {
    width: 36px;
    height: 40px;
    
    path {
      fill: white;
      stroke: #3676B6;
      stroke-width: 2;
      stroke-miterlimit: 16;
    }
  }
}

</style>